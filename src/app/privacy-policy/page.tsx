import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Amplify Talent Agency',
  description: 'Privacy Policy for Amplify Talent Agency.',
};

const PAGE_STYLES = {
  page: {
    minHeight: '100vh',
    background: '#03030f',
    color: 'rgba(245,245,247,0.88)',
    fontFamily: 'var(--font-inter, sans-serif)',
    padding: '0 0 80px',
  } as React.CSSProperties,
  header: {
    padding: '32px 40px 0',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    marginBottom: '48px',
    paddingBottom: '24px',
  } as React.CSSProperties,
  back: {
    color: '#FF2D87',
    fontSize: '14px',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  } as React.CSSProperties,
  content: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '0 40px',
  } as React.CSSProperties,
  h1: {
    fontSize: '40px',
    fontWeight: 400,
    color: '#FF2D87',
    margin: '0 0 8px',
  } as React.CSSProperties,
  updated: {
    fontSize: '13px',
    color: 'rgba(245,245,247,0.35)',
    margin: '0 0 48px',
  } as React.CSSProperties,
  h2: {
    fontSize: '20px',
    fontWeight: 400,
    color: 'rgba(245,245,247,0.9)',
    margin: '40px 0 12px',
  } as React.CSSProperties,
  p: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: 'rgba(245,245,247,0.6)',
    margin: '0 0 16px',
  } as React.CSSProperties,
  ul: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: 'rgba(245,245,247,0.6)',
    margin: '0 0 16px',
    paddingLeft: '24px',
  } as React.CSSProperties,
  a: {
    color: '#FF2D87',
    textDecoration: 'underline',
  } as React.CSSProperties,
};

export default function PrivacyPolicyPage() {
  return (
    <div style={PAGE_STYLES.page}>
      <div style={PAGE_STYLES.header}>
        <a href="/" style={PAGE_STYLES.back}>← Back to site</a>
      </div>
      <div style={PAGE_STYLES.content}>
        <h1 style={PAGE_STYLES.h1}>Privacy Policy</h1>
        <p style={PAGE_STYLES.updated}>Last updated: June 2026</p>

        <h2 style={PAGE_STYLES.h2}>1. Data Controller</h2>
        <p style={PAGE_STYLES.p}>
          The data controller responsible for your personal data is <strong>Amplify Talent Agency</strong>.
          For any privacy-related inquiries, please contact us at{' '}
          <a href="mailto:amplify.mail@amplify.com" style={PAGE_STYLES.a}>
            amplify.mail@amplify.com
          </a>.
        </p>

        <h2 style={PAGE_STYLES.h2}>2. Data We Collect</h2>
        <p style={PAGE_STYLES.p}>
          We collect personal data only when you voluntarily submit our contact form. The data collected includes:
        </p>
        <ul style={PAGE_STYLES.ul}>
          <li>Full name</li>
          <li>Email address</li>
          <li>Company name (optional)</li>
          <li>Message content</li>
        </ul>
        <p style={PAGE_STYLES.p}>
          We do not collect any additional personal data, track your browsing behavior, or use analytics
          that process personal information without your consent.
        </p>

        <h2 style={PAGE_STYLES.h2}>3. Purpose and Legal Basis</h2>
        <p style={PAGE_STYLES.p}>
          Your data is processed solely for the purpose of responding to your inquiry. The legal basis
          for processing is your explicit consent, given when you check the consent box and submit the
          contact form (Article 6(1)(a) GDPR).
        </p>

        <h2 style={PAGE_STYLES.h2}>4. Data Retention</h2>
        <p style={PAGE_STYLES.p}>
          Contact form submissions are retained for a maximum of 6 months from the date of submission,
          after which they are permanently deleted. We do not store your data in any database — it is
          transmitted directly via email to our team.
        </p>

        <h2 style={PAGE_STYLES.h2}>5. Data Sharing</h2>
        <p style={PAGE_STYLES.p}>
          Your data is not sold, rented, or shared with third parties for marketing purposes. We use
          the following service provider solely for email delivery:
        </p>
        <ul style={PAGE_STYLES.ul}>
          <li>
            <strong>Resend</strong> — email delivery service. Data is transmitted securely and is not
            retained by Resend beyond delivery. See{' '}
            <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" style={PAGE_STYLES.a}>
              Resend&apos;s Privacy Policy
            </a>.
          </li>
        </ul>

        <h2 style={PAGE_STYLES.h2}>6. Your Rights</h2>
        <p style={PAGE_STYLES.p}>Under GDPR, you have the following rights:</p>
        <ul style={PAGE_STYLES.ul}>
          <li><strong>Right of access</strong> — request a copy of the data we hold about you</li>
          <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
          <li><strong>Right to erasure</strong> — request deletion of your data</li>
          <li><strong>Right to restrict processing</strong> — request limitation of how we use your data</li>
          <li><strong>Right to data portability</strong> — request your data in a portable format</li>
          <li><strong>Right to withdraw consent</strong> — withdraw consent at any time (this does not affect prior processing)</li>
          <li><strong>Right to lodge a complaint</strong> — with your national data protection authority</li>
        </ul>
        <p style={PAGE_STYLES.p}>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:amplify.mail@amplify.com" style={PAGE_STYLES.a}>
            amplify.mail@amplify.com
          </a>.
        </p>

        <h2 style={PAGE_STYLES.h2}>7. Security</h2>
        <p style={PAGE_STYLES.p}>
          We implement appropriate technical and organisational measures to protect your personal data
          against unauthorised access, loss, or disclosure. All data is transmitted over encrypted
          connections (HTTPS/TLS).
        </p>

        <h2 style={PAGE_STYLES.h2}>8. Cookies</h2>
        <p style={PAGE_STYLES.p}>
          This website currently does not use cookies for tracking or analytics purposes. See our{' '}
          <a href="/cookie-policy" style={PAGE_STYLES.a}>Cookie Policy</a> for details.
        </p>

        <h2 style={PAGE_STYLES.h2}>9. Changes to This Policy</h2>
        <p style={PAGE_STYLES.p}>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated date. We encourage you to review this policy periodically.
        </p>
      </div>
    </div>
  );
}
