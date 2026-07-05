export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors() });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });

    let body;
    try { body = await request.json(); }
    catch { return jsonError('Invalid request', 400); }

    const { email, reportTitle, reportUrl, turnstileToken } = body;

    if (!email || !reportTitle || !reportUrl) return jsonError('Missing required fields', 400);
    if (!turnstileToken) return jsonError('Human verification required', 400);

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
    if (!tsData.success) return jsonError('Human verification failed', 403);

    // Send email via Brevo
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: { name: 'Michal Bojko', email: 'michal@mbojko.com' },
        to: [{ email }],
        subject: 'Observability Market Report: ' + reportTitle,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0b0d12;color:#e2e2e2;padding:2rem;border-left:4px solid #FFD600">
            <p style="font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#FFD600;margin-bottom:1rem">Observability Market Reports</p>
            <h1 style="font-size:1.5rem;font-weight:800;color:#ffffff;margin-bottom:1.5rem;letter-spacing:-0.02em">${esc(reportTitle)}</h1>
            <p style="font-size:14px;color:#8a92a6;line-height:1.7;margin-bottom:1.5rem">You requested a link to this observability market report. Click the button below to read it.</p>
            <a href="${esc(reportUrl)}" style="display:inline-block;background:#FFD600;color:#000;padding:12px 28px;font-size:13px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;text-decoration:none">Read the report</a>
            <p style="font-size:11px;color:#5a6070;margin-top:2rem;line-height:1.6">This is a one-time email. Your address has not been stored and will not be used for marketing.<br>mbojko.com &mdash; Michal Bojko &middot; Gdansk, Poland</p>
          </div>
        `
      })
    });

    if (!emailRes.ok) {
      const err = await emailRes.text();
      return jsonError('Failed to send: ' + err, 500);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...cors() }
    });
  }
};

function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
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
