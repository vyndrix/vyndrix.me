import AvatarSource from "@/public/avatar.jpg";
import { Trans } from "@lingui/react/macro";
import { Avatar } from "./ui/avatar";
import { Base } from "./ui/base";
import { Section } from "./ui/section";

export function HeroSection() {
  return (
    <Section>
      <Avatar>
        <Avatar.Image src={AvatarSource.src} />
        <Avatar.Fallback delayMs={1500}>
          <span className="text-3xl">RF</span>
        </Avatar.Fallback>
      </Avatar>
      <Base.Title size="lg" className="self-center mt-2 mb-3">
        <Trans>Hi, I'm Ramon</Trans>
      </Base.Title>
      <p className="transition-colors delay-700 text-lg text-center text-slate-700 dark:text-slate-300">
        <Trans>
          A frontend and mobile developer focused on growing as a specialist in
          modern interfaces and design-driven experiences, which is also a
          long-time comics collector that's permanently supervised by two lazy
          kitties.
        </Trans>
      </p>
    </Section>
  );
}
