import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy — Amplify Talent Agency',
  description: 'Cookie Policy for Amplify Talent Agency.',
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
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '14px',
    color: 'rgba(245,245,247,0.6)',
    margin: '0 0 16px',
  } as React.CSSProperties,
  th: {
    textAlign: 'left' as const,
    padding: '10px 12px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: 'rgba(245,245,247,0.45)',
    fontWeight: 400,
  } as React.CSSProperties,
  td: {
    padding: '10px 12px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,
  a: {
    color: '#FF2D87',
    textDecoration: 'underline',
  } as React.CSSProperties,
};

export default function CookiePolicyPage() {
  return (
    <div style={PAGE_STYLES.page}>
      <div style={PAGE_STYLES.header}>
        <a href="/" style={PAGE_STYLES.back}>← Back to site</a>
      </div>
      <div style={PAGE_STYLES.content}>
        <h1 style={PAGE_STYLES.h1}>Cookie Policy</h1>
        <p style={PAGE_STYLES.updated}>Last updated: June 2026</p>

        <h2 style={PAGE_STYLES.h2}>1. What Are Cookies</h2>
        <p style={PAGE_STYLES.p}>
          Cookies are small text files placed on your device when you visit a website. They help websites
          function properly and provide information to website owners.
        </p>

        <h2 style={PAGE_STYLES.h2}>2. Cookies We Use</h2>
        <p style={PAGE_STYLES.p}>
          This website currently uses only technically necessary cookies required for basic functionality.
          We do not use tracking, analytics, or marketing cookies.
        </p>
        <table style={PAGE_STYLES.table}>
          <thead>
            <tr>
              <th style={PAGE_STYLES.th}>Category</th>
              <th style={PAGE_STYLES.th}>Purpose</th>
              <th style={PAGE_STYLES.th}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={PAGE_STYLES.td}>Necessary</td>
              <td style={PAGE_STYLES.td}>Basic site functionality (e.g., security tokens)</td>
              <td style={PAGE_STYLES.td}>Active</td>
            </tr>
            <tr>
              <td style={PAGE_STYLES.td}>Analytics</td>
              <td style={PAGE_STYLES.td}>Usage statistics and performance monitoring</td>
              <td style={PAGE_STYLES.td}>Not in use</td>
            </tr>
            <tr>
              <td style={PAGE_STYLES.td}>Marketing</td>
              <td style={PAGE_STYLES.td}>Personalised advertising and retargeting</td>
              <td style={PAGE_STYLES.td}>Not in use</td>
            </tr>
          </tbody>
        </table>

        <h2 style={PAGE_STYLES.h2}>3. Future Analytics</h2>
        <p style={PAGE_STYLES.p}>
          We have built our cookie architecture to support the future addition of analytics tools such
          as Google Analytics, Plausible, or PostHog. If we add such tools, this page will be updated
          and a cookie consent banner will be displayed allowing you to accept or decline each category.
          No analytics cookies will be set without your explicit consent.
        </p>

        <h2 style={PAGE_STYLES.h2}>4. Cloudflare Turnstile</h2>
        <p style={PAGE_STYLES.p}>
          Our contact form uses Cloudflare Turnstile for spam protection. Turnstile may set a cookie
          to verify that you are a human. This is a necessary security measure and does not track you
          across sites. See{' '}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" style={PAGE_STYLES.a}>
            Cloudflare&apos;s Privacy Policy
          </a>.
        </p>

        <h2 style={PAGE_STYLES.h2}>5. Managing Cookies</h2>
        <p style={PAGE_STYLES.p}>
          You can control and delete cookies through your browser settings. However, disabling necessary
          cookies may affect the functionality of the website. For guidance on how to manage cookies,
          visit your browser&apos;s help documentation.
        </p>

        <h2 style={PAGE_STYLES.h2}>6. Contact</h2>
        <p style={PAGE_STYLES.p}>
          If you have questions about our use of cookies, contact us at{' '}
          <a href="mailto:amplify.mail@amplify.com" style={PAGE_STYLES.a}>
            amplify.mail@amplify.com
          </a>.
        </p>
      </div>
    </div>
  );
}
