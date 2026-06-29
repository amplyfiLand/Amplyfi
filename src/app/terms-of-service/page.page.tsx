import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Amplify Talent Agency',
  description: 'Terms of Service for Amplify Talent Agency.',
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

export default function TermsOfServicePage() {
  return (
    <div style={s.page}>
      <div style={s.header}><a href="/" style={s.back}>← Back to site</a></div>
      <div style={s.content}>
        <h1 style={s.h1}>Terms of Service</h1>
        <p style={s.updated}>Last updated: June 2026</p>

        <h2 style={s.h2}>1. Acceptance of Terms</h2>
        <p style={s.p}>By accessing and using the Amplify Talent Agency website (the &quot;Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use the Site.</p>

        <h2 style={s.h2}>2. About Amplify</h2>
        <p style={s.p}>Amplify Talent Agency (&quot;Amplify&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a European talent agency that works with content creators to help them grow, monetise, and build lasting personal brands. The Site is a marketing resource — not a contractual offer of agency services.</p>

        <h2 style={s.h2}>3. Use of the Site</h2>
        <p style={s.p}>You agree to use this Site only for lawful purposes. You must not:</p>
        <ul style={s.ul}>
          <li>Use the Site in any way that violates applicable local, national, or international laws</li>
          <li>Transmit unsolicited or unauthorised advertising or promotional material</li>
          <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
          <li>Submit false, misleading, or fraudulent information through the contact form</li>
        </ul>

        <h2 style={s.h2}>4. Intellectual Property</h2>
        <p style={s.p}>All content on this Site — including text, graphics, logos, images, and video — is the property of Amplify Talent Agency or its content suppliers and is protected by applicable intellectual property laws. Reproduction, distribution, or derivative works require our express written permission.</p>

        <h2 style={s.h2}>5. Contact Form</h2>
        <p style={s.p}>Submitting our contact form constitutes an informal inquiry only. It does not create any contractual relationship or obligation. We will endeavour to respond to genuine enquiries within a reasonable timeframe but do not guarantee a response.</p>

        <h2 style={s.h2}>6. Disclaimer of Warranties</h2>
        <p style={s.p}>The Site is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses. We disclaim all warranties to the fullest extent permitted by law.</p>

        <h2 style={s.h2}>7. Limitation of Liability</h2>
        <p style={s.p}>To the maximum extent permitted by applicable law, Amplify Talent Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site.</p>

        <h2 style={s.h2}>8. Third-Party Links</h2>
        <p style={s.p}>The Site may contain links to third-party websites provided for convenience only. We have no control over the content of those sites and accept no responsibility for them.</p>

        <h2 style={s.h2}>9. Governing Law</h2>
        <p style={s.p}>These Terms are governed by and construed in accordance with the laws of the European Union and applicable national law. Any disputes shall be subject to the exclusive jurisdiction of the courts of the relevant EU member state.</p>

        <h2 style={s.h2}>10. Changes</h2>
        <p style={s.p}>We reserve the right to modify these Terms at any time. Changes will be posted here with an updated date. Continued use of the Site constitutes acceptance of the new Terms.</p>

        <h2 style={s.h2}>11. Contact</h2>
        <p style={s.p}>Questions about these Terms: <a href="mailto:amplify.mail@amplify.com" style={s.a}>amplify.mail@amplify.com</a></p>
      </div>
    </div>
  );
}
