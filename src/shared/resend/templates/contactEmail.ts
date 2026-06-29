interface ContactEmailData {
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildContactEmailHtml(data: ContactEmailData): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:sans-serif;color:#1a1a2e;padding:32px;max-width:600px;margin:0 auto">
  <h2 style="color:#FF2D87;margin:0 0 24px;font-size:24px">New contact from Amplify</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr>
      <td style="padding:8px 0;font-weight:600;width:100px;vertical-align:top">Name</td>
      <td style="padding:8px 0">${escHtml(data.name)}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;font-weight:600;vertical-align:top">Email</td>
      <td style="padding:8px 0"><a href="mailto:${escHtml(data.email)}" style="color:#FF2D87">${escHtml(data.email)}</a></td>
    </tr>
    ${data.company ? `<tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Company</td><td style="padding:8px 0">${escHtml(data.company)}</td></tr>` : ''}
    ${data.role ? `<tr><td style="padding:8px 0;font-weight:600;vertical-align:top">Role</td><td style="padding:8px 0">${escHtml(data.role)}</td></tr>` : ''}
  </table>
  <div style="margin-top:20px">
    <p style="font-weight:600;margin:0 0 8px">Message</p>
    <p style="white-space:pre-wrap;background:#f5f5f7;padding:16px;border-radius:8px;margin:0;line-height:1.6">${escHtml(data.message)}</p>
  </div>
</body>
</html>`;
}
