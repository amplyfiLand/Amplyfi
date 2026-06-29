import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — Amplify Talent Agency',
  description: 'Cookie Policy for Amplify Talent Agency.',
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
  table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: '14px', color: 'rgba(245,245,247,0.6)', margin: '0 0 16px' } as React.CSSProperties,
  th: { textAlign: 'left' as const, padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: 'rgba(245,245,247,0.45)', fontWeight: 400 } as React.CSSProperties,
  td: { padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)', verticalAlign: 'top' as const } as React.CSSProperties,
  a: { color: '#FF2D87', textDecoration: 'underline' } as React.CSSProperties,
};

export default function CookiePolicyPage() {
  return (
    <div style={s.page}>
      <div style={s.header}><a href="/" style={s.back}>← Back to site</a></div>
      <div style={s.content}>
        <h1 style={s.h1}>Cookie Policy</h1>
        <p style={s.updated}>Last updated: June 2026</p>

        <h2 style={s.h2}>1. What Are Cookies</h2>
        <p style={s.p}>Cookies are small text files placed on your device when you visit a website. They help websites function properly and provide information to website owners.</p>

        <h2 style={s.h2}>2. Cookies We Use</h2>
        <p style={s.p}>This website currently uses only technically necessary cookies required for basic functionality. We do not use tracking, analytics, or marketing cookies.</p>
        <table style={s.table}>
          <thead>
            <tr>
              <th style={s.th}>Category</th>
              <th style={s.th}>Purpose</th>
              <th style={s.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={s.td}>Necessary</td><td style={s.td}>Basic site functionality (e.g., security tokens)</td><td style={s.td}>Active</td></tr>
            <tr><td style={s.td}>Analytics</td><td style={s.td}>Usage statistics and performance monitoring</td><td style={s.td}>Not in use</td></tr>
            <tr><td style={s.td}>Marketing</td><td style={s.td}>Personalised advertising and retargeting</td><td style={s.td}>Not in use</td></tr>
          </tbody>
        </table>

        <h2 style={s.h2}>3. Future Analytics</h2>
        <p style={s.p}>We have built our cookie architecture to support future analytics tools (Google Analytics, Plausible, or PostHog). If added, this page will be updated and a consent banner will be shown. No analytics cookies will be set without your explicit consent.</p>

        <h2 style={s.h2}>4. Cloudflare Turnstile</h2>
        <p style={s.p}>Our contact form uses Cloudflare Turnstile for spam protection. Turnstile may set a cookie to verify you are human. This is a necessary security measure and does not track you across sites. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={s.a}>Cloudflare&apos;s Privacy Policy</a>.</p>

        <h2 style={s.h2}>5. Managing Cookies</h2>
        <p style={s.p}>You can control and delete cookies through your browser settings. Disabling necessary cookies may affect site functionality.</p>

        <h2 style={s.h2}>6. Contact</h2>
        <p style={s.p}>Questions about cookies: <a href="mailto:amplify.mail@amplify.com" style={s.a}>amplify.mail@amplify.com</a></p>
      </div>
    </div>
  );
}
