export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors() });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try { body = await request.json(); }
    catch { return jsonError('Invalid request', 400); }

    const { name, email, organisation, topic, message, turnstileToken } = body;

    // Validate fields
    if (!name || !email || !topic || !message) {
      return jsonError('Missing required fields', 400);
    }
    if (!turnstileToken) {
      return jsonError('Human verification required', 400);
    }

    // Verify Turnstile
    const tsRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP')
      })
    });
    const tsData = await tsRes.json();
    if (!tsData.success) {
      return jsonError('Human verification failed', 403);
    }

    // Send via Brevo API
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { name: 'mbojko.com contact form', email: 'michal@mbojko.com' },
        to: [{ email: 'michal@mbojko.com', name: 'Michał Bojko' }],
        replyTo: { email, name },
        subject: `[mbojko.com] ${topic} — ${name}`,
        htmlContent: `
          <h2 style="font-family:sans-serif">New contact form submission</h2>
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold;width:140px">Name</td><td style="padding:8px">${esc(name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold">Organisation</td><td style="padding:8px">${esc(organisation || '—')}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Topic</td><td style="padding:8px">${esc(topic)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px;white-space:pre-wrap">${esc(message)}</td></tr>
          </table>
        `
      })
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      console.error('Brevo error:', err);
      return jsonError('Failed to send email', 500);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...cors() }
    });
  }
};

function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function cors() {
  return {
    'Access-Control-Allow-Origin': 'https://mbojko.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}
function jsonError(msg, status) {
  return new Response(JSON.stringify({ error: msg }), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors() }
  });
}
