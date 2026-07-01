interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
}

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ROLE_LABELS: Record<string, string> = {
  creator: 'Creator',
  brand: 'Brand',
  partner: 'Partner',
  other: 'Other',
};

export function buildContactEmailHtml(data: ContactEmailData): string {
  const roleLabel = data.role ? (ROLE_LABELS[data.role] ?? esc(data.role)) : null;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 16px 0;vertical-align:top;width:110px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.1em;color:rgba(245,245,247,0.35);text-transform:uppercase;">${label}</span>
      </td>
      <td style="padding:0 0 16px 0;vertical-align:top;">
        <span style="font-size:15px;color:rgba(245,245,247,0.88);">${value}</span>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Contact — Amplify</title>
</head>
<body style="margin:0;padding:0;background:#06060f;font-family:-apple-system,BlinkMacSystemFont,'Inter',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#06060f;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="padding:0 0 32px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="font-size:20px;font-weight:600;letter-spacing:0.2em;color:#f5f5f7;">AMPLIFY</span>
                    <span style="display:block;font-size:9px;font-weight:400;letter-spacing:0.3em;color:rgba(245,245,247,0.3);margin-top:2px;">TALENT AGENCY</span>
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <span style="font-size:11px;color:rgba(245,245,247,0.3);letter-spacing:0.05em;">New inquiry</span>
                  </td>
                </tr>
              </table>
              <!-- Pink divider -->
              <div style="height:1px;background:linear-gradient(90deg,#FF2D87 0%,rgba(255,45,135,0) 100%);margin-top:16px;"></div>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:16px;padding:32px;">

              <!-- Title -->
              <p style="margin:0 0 28px 0;font-size:24px;font-weight:400;color:#FF2D87;line-height:1.1;">
                New message<br/>
                <span style="color:#f5f5f7;">${esc(data.name)}</span>
              </p>

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                ${row('Email', `<a href="mailto:${esc(data.email)}" style="color:#FF2D87;text-decoration:none;">${esc(data.email)}</a>`)}
                ${data.company ? row('Company', esc(data.company)) : ''}
                ${roleLabel ? row('Applying as', roleLabel) : ''}
              </table>

              <!-- Divider -->
              <div style="height:1px;background:rgba(255,255,255,0.06);margin:8px 0 24px;"></div>

              <!-- Message -->
              <p style="margin:0 0 12px 0;font-size:11px;font-weight:600;letter-spacing:0.1em;color:rgba(245,245,247,0.35);text-transform:uppercase;">Message</p>
              <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-left:2px solid #FF2D87;border-radius:0 8px 8px 0;padding:18px 20px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:rgba(245,245,247,0.8);white-space:pre-wrap;">${esc(data.message)}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${esc(data.email)}"
                       style="display:inline-block;background:#FF2D87;color:#fff;font-size:14px;font-weight:400;letter-spacing:0.04em;text-decoration:none;padding:12px 28px;border-radius:6px;">
                      Reply to ${esc(data.name)}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0 0;">
              <p style="margin:0;font-size:12px;color:rgba(245,245,247,0.2);line-height:1.6;text-align:center;">
                This message was sent via the contact form on<br/>
                <a href="https://amplyfi-beta.vercel.app" style="color:rgba(255,45,135,0.5);text-decoration:none;">amplyfi-beta.vercel.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
