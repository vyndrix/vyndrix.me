"use client";

import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills";
import { Screen } from "@/components/ui";
import { WorkingWaysSection } from "@/components/working-ways";

export default function Home() {
  return (
    <Screen>
      <HeroSection />
      <SkillsSection />
      <WorkingWaysSection />
    </Screen>
  );
}
