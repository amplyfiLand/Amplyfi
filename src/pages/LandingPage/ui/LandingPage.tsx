"use client";

import { MotionConfig } from "framer-motion";
import { ContactSection } from "@/widgets/ContactSection/ui/ContactSection";
import { Header } from "@/widgets/Header/ui/Header";
import { HeroSection } from "@/widgets/HeroSection/ui/HeroSection";
import { HowWeHelpSection } from "@/widgets/HowWeHelpSection/ui/HowWeHelpSection";
import { LegaciesSection } from "@/widgets/LegaciesSection/ui/LegaciesSection";
import { MountainDivider } from "@/widgets/MountainDivider/ui/MountainDivider";
import { StatsBar } from "@/widgets/StatsBar/ui/StatsBar";
import { TheySaidSection } from "@/widgets/TheySaidSection/ui/TheySaidSection";
import { WhatWeDoSection } from "@/widgets/WhatWeDoSection/ui/WhatWeDoSection";
import { WhoWeAreSection } from "@/widgets/WhoWeAreSection/ui/WhoWeAreSection";
import styles from "./LandingPage.module.scss";

export function LandingPage() {
  return (
    <MotionConfig reducedMotion="user">
      <main className={styles.page} id="top">
        <Header />
        <HeroSection />
        <StatsBar />
        <WhoWeAreSection />
        <MountainDivider />
        <WhatWeDoSection />
        <TheySaidSection />
        <LegaciesSection />
        <HowWeHelpSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
