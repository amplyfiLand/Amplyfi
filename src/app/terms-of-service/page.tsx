import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Amplify Talent Agency',
  description: 'Terms of Service for Amplify Talent Agency.',
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

export default function TermsOfServicePage() {
  return (
    <div style={PAGE_STYLES.page}>
      <div style={PAGE_STYLES.header}>
        <a href="/" style={PAGE_STYLES.back}>← Back to site</a>
      </div>
      <div style={PAGE_STYLES.content}>
        <h1 style={PAGE_STYLES.h1}>Terms of Service</h1>
        <p style={PAGE_STYLES.updated}>Last updated: June 2026</p>

        <h2 style={PAGE_STYLES.h2}>1. Acceptance of Terms</h2>
        <p style={PAGE_STYLES.p}>
          By accessing and using the Amplify Talent Agency website (the &quot;Site&quot;), you accept and agree
          to be bound by these Terms of Service. If you do not agree to these terms, please do not use
          the Site.
        </p>

        <h2 style={PAGE_STYLES.h2}>2. About Amplify</h2>
        <p style={PAGE_STYLES.p}>
          Amplify Talent Agency (&quot;Amplify&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a European talent agency
          that works with content creators to help them grow, monetise, and build lasting personal brands.
          The Site is a marketing and information resource — it is not a contractual offer of agency services.
        </p>

        <h2 style={PAGE_STYLES.h2}>3. Use of the Site</h2>
        <p style={PAGE_STYLES.p}>You agree to use this Site only for lawful purposes. You must not:</p>
        <ul style={PAGE_STYLES.ul}>
          <li>Use the Site in any way that violates applicable local, national, or international laws</li>
          <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
          <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
          <li>Submit false, misleading, or fraudulent information through the contact form</li>
        </ul>

        <h2 style={PAGE_STYLES.h2}>4. Intellectual Property</h2>
        <p style={PAGE_STYLES.p}>
          All content on this Site — including text, graphics, logos, images, and video — is the
          property of Amplify Talent Agency or its content suppliers and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or create derivative works
          without our express written permission.
        </p>

        <h2 style={PAGE_STYLES.h2}>5. Contact Form</h2>
        <p style={PAGE_STYLES.p}>
          Submitting our contact form constitutes an informal inquiry only. It does not create any
          contractual relationship or obligation on either party. We will endeavour to respond to
          genuine enquiries within a reasonable timeframe but do not guarantee a response.
        </p>

        <h2 style={PAGE_STYLES.h2}>6. Disclaimer of Warranties</h2>
        <p style={PAGE_STYLES.p}>
          The Site is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant
          that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          We disclaim all warranties to the fullest extent permitted by law.
        </p>

        <h2 style={PAGE_STYLES.h2}>7. Limitation of Liability</h2>
        <p style={PAGE_STYLES.p}>
          To the maximum extent permitted by applicable law, Amplify Talent Agency shall not be liable
          for any indirect, incidental, special, consequential, or punitive damages arising from your
          use of, or inability to use, the Site or its content.
        </p>

        <h2 style={PAGE_STYLES.h2}>8. Third-Party Links</h2>
        <p style={PAGE_STYLES.p}>
          The Site may contain links to third-party websites. These links are provided for your convenience
          only. We have no control over the content of those sites and accept no responsibility for them.
        </p>

        <h2 style={PAGE_STYLES.h2}>9. Governing Law</h2>
        <p style={PAGE_STYLES.p}>
          These Terms of Service are governed by and construed in accordance with the laws of the
          European Union and applicable national law. Any disputes shall be subject to the exclusive
          jurisdiction of the courts of the relevant EU member state.
        </p>

        <h2 style={PAGE_STYLES.h2}>10. Changes to These Terms</h2>
        <p style={PAGE_STYLES.p}>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page
          with an updated date. Your continued use of the Site after any changes constitutes acceptance
          of the new Terms.
        </p>

        <h2 style={PAGE_STYLES.h2}>11. Contact</h2>
        <p style={PAGE_STYLES.p}>
          For questions about these Terms, contact us at{' '}
          <a href="mailto:amplify.mail@amplify.com" style={PAGE_STYLES.a}>
            amplify.mail@amplify.com
          </a>.
        </p>
      </div>
    </div>
  );
}
