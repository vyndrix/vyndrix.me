"use client";

import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { Screen } from "@/components/ui/screen";
import { WorkingWaysSection } from "@/components/working-ways-section";

export default function Home() {
  return (
    <Screen>
      <HeroSection />
      <SkillsSection />
      <WorkingWaysSection />
    </Screen>
  );
}
