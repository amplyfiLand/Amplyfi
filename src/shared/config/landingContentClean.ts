export enum WhatWeDoKind {
  Discover = "discover",
  Develop = "develop",
  Amplify = "amplify"
}

export enum HowWeHelpKind {
  ExecutiveProducer = "executiveProducer",
  PersonalManager = "personalManager",
  HeadOfTalents = "headOfTalents",
  CreativeManager = "creativeManager",
  SalesManager = "salesManager"
}

export type WhatWeDoItem = {
  kind: WhatWeDoKind;
  title: string;
  description: string;
};

export type TheySaidItem = {
  objection: string;
  response: string;
};

export type HowWeHelpCard = {
  kind: HowWeHelpKind;
  title: string;
  description: string;
};

export const landingContent = {
  brand: {
    name: "AMPLIFY",
    tagline: "TALENT AGENCY"
  },
  hero: {
    headlineLines: ["We Find", "We Develop", "We Amplify"] as const,
    tagline: "With us Dreams come True",
    cta: "Let's grow together"
  },
  stats: [
    { value: "150+", label: "creators\ndeveloped" },
    { value: "300M+", label: "Total audience\ngenerated" },
    { value: "Top 1%", label: "Elite creators\nNetwork" },
    { value: "Global", label: "Opportunities\nworldwide" }
  ],
  whoWeAre: {
    eyebrow: "Who we are?",
    description:
      "Amplify is a European talent agency that works with ambitious creators. We Help them grow, monetize and build a brand that lasts",
    cards: [{ title: "Personal\napproach" }, { title: "Strategic\ngrowth" }]
  },
  whatWeDo: {
    eyebrow: "What we do",
    title: "We turn potential\ninto impact",
    items: [
      {
        kind: WhatWeDoKind.Discover,
        title: "Discover",
        description: "We find unique talent\nwith real potential"
      },
      {
        kind: WhatWeDoKind.Develop,
        title: "Develop",
        description: "We provide strategy,\ntraining and support"
      },
      {
        kind: WhatWeDoKind.Amplify,
        title: "Amplify",
        description: "We grow their brand\nand maximize their impact"
      }
    ] satisfies WhatWeDoItem[]
  },
  theySaid: {
    eyebrow: "They said",
    items: [
      {
        objection: "I'm just ordinary.",
        response:
          "No, you are not. Our scouts don't look at your current sub count. We look at your hidden potential and help you build a unique persona that people will fall in love with."
      },
      {
        objection: "I don't have a studio.",
        response:
          "We do. Amplify provides young creators with professional cameras, lighting, sound, and pro editors. You just focus on being yourself."
      },
      {
        objection: "I don't know where to start.",
        response:
          "We give you a step-by-step roadmap. From your very first video to your first big sponsorship deal, we walk right beside you."
      }
    ] satisfies TheySaidItem[]
  },
  legacies: {
    subtitle: "We don't just manage careers",
    title: "We built legacies",
    lines: [
      "Talent is everywhere. Impact is rare.",
      "We exist to create the difference"
    ] as const
  },
  howWeHelp: {
    eyebrow: "How we help",
    cards: [
      {
        kind: HowWeHelpKind.ExecutiveProducer,
        title: "Executive producer",
        description:
          "Our producers will help you bring your ideas to life, carry out original projects, and create global hits"
      },
      {
        kind: HowWeHelpKind.PersonalManager,
        title: "Personal Manager",
        description:
          "Our managers provide strategies, tools, and a network of contacts to help you reach your full potential and take your business to the next level"
      },
      {
        kind: HowWeHelpKind.HeadOfTalents,
        title: "Head\nof talents",
        description:
          "We discover and develop top creators, connect them with brands and unlock new opportunities"
      },
      {
        kind: HowWeHelpKind.CreativeManager,
        title: "Creative Manager",
        description:
          "We refine creative direction branding and content to make creators stand out"
      },
      {
        kind: HowWeHelpKind.SalesManager,
        title: "Sales Manager",
        description:
          "We connect creators with the right brands and negotiate deals that create real value"
      }
    ] satisfies HowWeHelpCard[]
  },
  contact: {
    title: "Contact us",
    phone: "+1 (999) 999-99-99",
    email: "amplify.mail@amplify.com",
    cta: "Amplify Me!"
  }
} as const;
