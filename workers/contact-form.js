export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors() });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    let body;
    try { body = await request.json(); }
    catch { return jsonError('Invalid request', 400); }

    const { name, email, organisation, topic, message, turnstileToken } = body;
    if (!name || !email || !topic || !message) return jsonError('Missing required fields', 400);
    if (!turnstileToken) return jsonError('Human verification required', 400);

    const tsRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: turnstileToken, remoteip: request.headers.get('CF-Connecting-IP') })
    });
    const tsData = await tsRes.json();
    if (!tsData.success) return jsonError('Human verification failed: ' + JSON.stringify(tsData['error-codes']), 403);

    const emailPayload = {
      sender: { name: 'mbojko.com contact form', email: 'michal@mbojko.com' },
      to: [{ email: 'michal@mbojko.com', name: 'Michal Bojko' }],
      replyTo: { email, name },
      subject: '[mbojko.com] ' + topic + ' - ' + name,
      htmlContent: '<h2>New contact form submission</h2><p><b>Name:</b> ' + esc(name) + '</p><p><b>Email:</b> ' + esc(email) + '</p><p><b>Organisation:</b> ' + esc(organisation||'-') + '</p><p><b>Topic:</b> ' + esc(topic) + '</p><p><b>Message:</b><br>' + esc(message).replace(/\n/g,'<br>') + '</p>'
    };

    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'api-key': env.BREVO_API_KEY },
      body: JSON.stringify(emailPayload)
    });

    const emailStatus = emailRes.status;
    const emailBody = await emailRes.text();

    if (!emailRes.ok) return jsonError('Brevo error ' + emailStatus + ': ' + emailBody, 500);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json', ...cors() } });
  }
};
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function cors() { return { 'Access-Control-Allow-Origin': 'https://mbojko.com', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' }; }
function jsonError(msg, status) { return new Response(JSON.stringify({ error: msg }), { status, headers: { 'Content-Type': 'application/json', ...cors() } }); }
