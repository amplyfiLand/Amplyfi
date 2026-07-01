import { createClient } from 'next-sanity';

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Нужен SANITY_WRITE_TOKEN. Запусти:\nSANITY_WRITE_TOKEN=<твой_токен> node scripts/seed-sanity.mjs');
  process.exit(1);
}

const client = createClient({
  projectId: 'uhnlo4xy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const landingPage = {
  _id: 'landingPage',
  _type: 'landingPage',
  hero: {
    headlineLines: ['We Find', 'We Develop', 'We Amplify'],
    tagline: 'With us Dreams come True',
    cta: "Let's grow together",
  },
  stats: [
    { _key: 'stat1', value: '150+', label: 'creators\ndeveloped' },
    { _key: 'stat2', value: '300M+', label: 'Total audience\ngenerated' },
    { _key: 'stat3', value: 'Top 1%', label: 'Elite creators\nNetwork' },
    { _key: 'stat4', value: 'Global', label: 'Opportunities\nworldwide' },
  ],
  whoWeAre: {
    eyebrow: 'Who we are?',
    description: 'Amplify is a European talent agency that works with ambitious creators. We Help them grow, monetize and build a brand that lasts',
    cards: [
      { _key: 'card1', title: 'Personal\napproach' },
      { _key: 'card2', title: 'Strategic\ngrowth' },
    ],
  },
  whatWeDo: {
    eyebrow: 'What we do',
    title: 'We turn potential\ninto impact',
    items: [
      { _key: 'item1', kind: 'discover', title: 'Discover', description: 'We find unique talent\nwith real potential' },
      { _key: 'item2', kind: 'develop', title: 'Develop', description: 'We provide strategy,\ntraining and support' },
      { _key: 'item3', kind: 'amplify', title: 'Amplify', description: 'We grow their brand\nand maximize their impact' },
    ],
  },
  theySaid: {
    eyebrow: 'They said',
    items: [
      {
        _key: 'ts1',
        objection: "I'm just ordinary.",
        response: "No, you are not. Our scouts don't look at your current sub count. We look at your hidden potential and help you build a unique persona that people will fall in love with.",
      },
      {
        _key: 'ts2',
        objection: "I don't have a studio.",
        response: 'We do. Amplify provides young creators with professional cameras, lighting, sound, and pro editors. You just focus on being yourself.',
      },
      {
        _key: 'ts3',
        objection: "I don't know where to start.",
        response: 'We give you a step-by-step roadmap. From your very first video to your first big sponsorship deal, we walk right beside you.',
      },
    ],
  },
  legacies: {
    subtitle: "We don't just manage careers",
    title: 'We built legacies',
    lines: ['Talent is everywhere. Impact is rare.', 'We exist to create the difference'],
  },
  howWeHelp: {
    eyebrow: 'How we help',
    cards: [
      {
        _key: 'hwh1',
        kind: 'executiveProducer',
        title: 'Executive producer',
        description: 'Our producers will help you bring your ideas to life, carry out original projects, and create global hits',
      },
      {
        _key: 'hwh2',
        kind: 'personalManager',
        title: 'Personal Manager',
        description: 'Our managers provide strategies, tools, and a network of contacts to help you reach your full potential and take your business to the next level',
      },
      {
        _key: 'hwh3',
        kind: 'headOfTalents',
        title: 'Head\nof talents',
        description: 'We discover and develop top creators, connect them with brands and unlock new opportunities',
      },
      {
        _key: 'hwh4',
        kind: 'creativeManager',
        title: 'Creative Manager',
        description: 'We refine creative direction branding and content to make creators stand out',
      },
      {
        _key: 'hwh5',
        kind: 'salesManager',
        title: 'Sales Manager',
        description: 'We connect creators with the right brands and negotiate deals that create real value',
      },
    ],
  },
  contact: {
    title: 'Contact us',
    phone: '+1 (999) 999-99-99',
    email: 'amplify.mail@amplify.com',
    cta: 'Amplify Me!',
  },
};

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  logoText: 'AMPLIFY',
  logoTagline: 'TALENT AGENCY',
  navLinks: [
    { _key: 'nav1', label: 'About', href: '#about' },
    { _key: 'nav2', label: 'Services', href: '#services' },
    { _key: 'nav3', label: 'Contact', href: '#contact' },
  ],
  socialLinks: [],
  legalLinks: [
    { _key: 'leg1', label: 'Privacy Policy', href: '/privacy-policy' },
    { _key: 'leg2', label: 'Terms of Service', href: '/terms-of-service' },
    { _key: 'leg3', label: 'Cookie Policy', href: '/cookie-policy' },
  ],
};

console.log('Заполняю Sanity...');
await client.createOrReplace(landingPage);
console.log('✓ Landing Page создан');
await client.createOrReplace(siteSettings);
console.log('✓ Site Settings создан');
console.log('\nГотово! Документы опубликованы в Sanity.');
