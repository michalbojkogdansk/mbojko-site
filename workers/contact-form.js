// Daily cap on CTO Talks card submissions per IP. Best-effort: the counter lives in the memory of
// this worker instance (no KV bound), so it can reset when the instance is recycled and is not
// shared between instances. It slows down repeated clicking, it is not a hard guarantee.
const CTO_DAILY_LIMIT = 10;
const ctoHits = new Map();
function ctoOverLimit(ip) {
  const day = new Date().toISOString().slice(0, 10);
  if (ctoHits.size > 2000) { for (const [k, v] of ctoHits) if (v.day !== day) ctoHits.delete(k); }
  const e = ctoHits.get(ip);
  if (!e || e.day !== day) { ctoHits.set(ip, { day, n: 1 }); return false; }
  e.n++;
  return e.n > CTO_DAILY_LIMIT;
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors() });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    let body;
    try { body = await request.json(); }
    catch { return jsonError('Invalid request', 400); }

    const { name, email, organisation, topic, message, turnstileToken, attachment } = body;
    if (!name || !email || !topic || !message) return jsonError('Missing required fields', 400);
    if (!turnstileToken) return jsonError('Human verification required', 400);

    if (String(topic).startsWith('CTO Talks') && ctoOverLimit(request.headers.get('CF-Connecting-IP') || 'unknown')) {
      return jsonError('Dzienny limit wysyłek został wyczerpany. Spróbuj jutro albo napisz do mnie.', 429);
    }

    // Optional PNG attachment (used by the CTO Talks card page). Strictly validated:
    // PNG only, size-capped, base64 only.
    let attachments;
    if (attachment !== undefined && attachment !== null) {
      const okName = typeof attachment.name === 'string' && /^[A-Za-z0-9._-]{1,80}\.png$/.test(attachment.name);
      const okBody = typeof attachment.content === 'string' && attachment.content.length <= 4000000 &&
        attachment.content.startsWith('iVBORw0KGgo') && /^[A-Za-z0-9+/]+={0,2}$/.test(attachment.content);
      if (!okName || !okBody) return jsonError('Invalid attachment', 400);
      attachments = [{ name: attachment.name, content: attachment.content }];
    }

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
      ...(attachments ? { attachment: attachments } : {}),
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
    return new Response(JSON.stringify({ ok: true, attached: !!attachments }), { status: 200, headers: { 'Content-Type': 'application/json', ...cors() } });
  }
};
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function cors() { return { 'Access-Control-Allow-Origin': 'https://mbojko.com', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' }; }
function jsonError(msg, status) { return new Response(JSON.stringify({ error: msg }), { status, headers: { 'Content-Type': 'application/json', ...cors() } }); }
