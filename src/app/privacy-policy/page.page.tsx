import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Amplify Talent Agency',
  description: 'Privacy Policy for Amplify Talent Agency.',
};

const s = {
  page: { minHeight: '100vh', background: '#03030f', color: 'rgba(245,245,247,0.88)', fontFamily: 'var(--font-inter, sans-serif)', padding: '0 0 80px' } as React.CSSProperties,
  header: { padding: '32px 40px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '48px' } as React.CSSProperties,
  back: { color: '#FF2D87', fontSize: '14px', textDecoration: 'none' } as React.CSSProperties,
  content: { maxWidth: '760px', margin: '0 auto', padding: '0 40px' } as React.CSSProperties,
  h1: { fontSize: '40px', fontWeight: 400, color: '#FF2D87', margin: '0 0 8px' } as React.CSSProperties,
  updated: { fontSize: '13px', color: 'rgba(245,245,247,0.35)', margin: '0 0 48px' } as React.CSSProperties,
  h2: { fontSize: '20px', fontWeight: 400, color: 'rgba(245,245,247,0.9)', margin: '40px 0 12px' } as React.CSSProperties,
  p: { fontSize: '15px', lineHeight: '1.7', color: 'rgba(245,245,247,0.6)', margin: '0 0 16px' } as React.CSSProperties,
  ul: { fontSize: '15px', lineHeight: '1.7', color: 'rgba(245,245,247,0.6)', margin: '0 0 16px', paddingLeft: '24px' } as React.CSSProperties,
  a: { color: '#FF2D87', textDecoration: 'underline' } as React.CSSProperties,
};

export default function PrivacyPolicyPage() {
  return (
    <div style={s.page}>
      <div style={s.header}><a href="/" style={s.back}>← Back to site</a></div>
      <div style={s.content}>
        <h1 style={s.h1}>Privacy Policy</h1>
        <p style={s.updated}>Last updated: June 2026</p>

        <h2 style={s.h2}>1. Data Controller</h2>
        <p style={s.p}>The data controller is <strong>Amplify Talent Agency</strong>. For privacy inquiries: <a href="mailto:amplify.mail@amplify.com" style={s.a}>amplify.mail@amplify.com</a>.</p>

        <h2 style={s.h2}>2. Data We Collect</h2>
        <p style={s.p}>We collect personal data only when you voluntarily submit our contact form:</p>
        <ul style={s.ul}>
          <li>Full name</li>
          <li>Email address</li>
          <li>Company name (optional)</li>
          <li>Role / how you are applying</li>
          <li>Message content</li>
        </ul>
        <p style={s.p}>We do not collect browsing behaviour, use tracking pixels, or process personal data without your consent.</p>

        <h2 style={s.h2}>3. Purpose and Legal Basis</h2>
        <p style={s.p}>Your data is processed solely to respond to your inquiry. Legal basis: your explicit consent given via the form checkbox (Article 6(1)(a) GDPR).</p>

        <h2 style={s.h2}>4. Data Retention</h2>
        <p style={s.p}>Contact form submissions are retained for a maximum of 6 months then permanently deleted. We do not store data in any database — it is transmitted directly via email.</p>

        <h2 style={s.h2}>5. Data Sharing</h2>
        <p style={s.p}>Your data is not sold or shared with third parties for marketing. We use <strong>Resend</strong> for email delivery only. See <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" style={s.a}>Resend&apos;s Privacy Policy</a>.</p>

        <h2 style={s.h2}>6. Your Rights</h2>
        <ul style={s.ul}>
          <li><strong>Access</strong> — request a copy of data we hold</li>
          <li><strong>Rectification</strong> — request correction of inaccurate data</li>
          <li><strong>Erasure</strong> — request deletion of your data</li>
          <li><strong>Restriction</strong> — request limitation of processing</li>
          <li><strong>Portability</strong> — receive your data in a portable format</li>
          <li><strong>Withdraw consent</strong> — at any time, without affecting prior processing</li>
          <li><strong>Lodge a complaint</strong> — with your national data protection authority</li>
        </ul>
        <p style={s.p}>To exercise these rights: <a href="mailto:amplify.mail@amplify.com" style={s.a}>amplify.mail@amplify.com</a></p>

        <h2 style={s.h2}>7. Security</h2>
        <p style={s.p}>All data is transmitted over encrypted connections (HTTPS/TLS). We implement appropriate technical and organisational measures against unauthorised access.</p>

        <h2 style={s.h2}>8. Cookies</h2>
        <p style={s.p}>This website does not use tracking or analytics cookies. See our <a href="/cookie-policy" style={s.a}>Cookie Policy</a> for details.</p>

        <h2 style={s.h2}>9. Changes</h2>
        <p style={s.p}>We may update this policy from time to time. Changes will be posted here with an updated date.</p>
      </div>
    </div>
  );
}
