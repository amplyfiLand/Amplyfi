"use client";

import { createContext, useContext } from 'react';
import type { HowWeHelpCard, WhatWeDoItem } from '@/shared/config/landingContentClean';
import { landingContent } from '@/shared/config/landingContentClean';
import type { SanityLandingContent } from '@/shared/sanity/types';

function mergeContent(sanity: SanityLandingContent | null) {
  if (!sanity) return landingContent;

  return {
    ...landingContent,
    ...(sanity.hero && {
      hero: {
        ...landingContent.hero,
        tagline: sanity.hero.tagline ?? landingContent.hero.tagline,
        cta: sanity.hero.cta ?? landingContent.hero.cta,
        headlineLines:
          (sanity.hero.headlineLines as unknown as typeof landingContent.hero.headlineLines) ??
          landingContent.hero.headlineLines,
      },
    }),
    ...(sanity.stats && { stats: sanity.stats }),
    ...(sanity.whoWeAre && {
      whoWeAre: {
        eyebrow: sanity.whoWeAre.eyebrow ?? landingContent.whoWeAre.eyebrow,
        description: sanity.whoWeAre.description ?? landingContent.whoWeAre.description,
        cards: sanity.whoWeAre.cards ?? landingContent.whoWeAre.cards,
      },
    }),
    ...(sanity.whatWeDo && {
      whatWeDo: {
        eyebrow: sanity.whatWeDo.eyebrow ?? landingContent.whatWeDo.eyebrow,
        title: sanity.whatWeDo.title ?? landingContent.whatWeDo.title,
        items: sanity.whatWeDo.items
          ? (sanity.whatWeDo.items as WhatWeDoItem[])
          : landingContent.whatWeDo.items,
      },
    }),
    ...(sanity.theySaid && {
      theySaid: {
        eyebrow: sanity.theySaid.eyebrow ?? landingContent.theySaid.eyebrow,
        items: sanity.theySaid.items ?? landingContent.theySaid.items,
      },
    }),
    ...(sanity.legacies && {
      legacies: {
        subtitle: sanity.legacies.subtitle ?? landingContent.legacies.subtitle,
        title: sanity.legacies.title ?? landingContent.legacies.title,
        lines:
          (sanity.legacies.lines as unknown as typeof landingContent.legacies.lines) ??
          landingContent.legacies.lines,
      },
    }),
    ...(sanity.howWeHelp && {
      howWeHelp: {
        eyebrow: sanity.howWeHelp.eyebrow ?? landingContent.howWeHelp.eyebrow,
        cards: sanity.howWeHelp.cards
          ? (sanity.howWeHelp.cards as HowWeHelpCard[])
          : landingContent.howWeHelp.cards,
      },
    }),
    ...(sanity.contact && {
      contact: {
        title: sanity.contact.title ?? landingContent.contact.title,
        phone: sanity.contact.phone ?? landingContent.contact.phone,
        email: sanity.contact.email ?? landingContent.contact.email,
        cta: sanity.contact.cta ?? landingContent.contact.cta,
      },
    }),
  };
}

type LandingContentValue = ReturnType<typeof mergeContent>;

const LandingContentCtx = createContext<LandingContentValue>(landingContent);

interface ProviderProps {
  children: React.ReactNode;
  sanityData: SanityLandingContent | null;
}

export function LandingContentProvider({ children, sanityData }: ProviderProps) {
  const value = mergeContent(sanityData);
  return <LandingContentCtx.Provider value={value}>{children}</LandingContentCtx.Provider>;
}

export function useLandingContent(): LandingContentValue {
  return useContext(LandingContentCtx);
}
