import ww from "@/data/working-ways";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { Essay, Section } from "./ui";

export function WorkingWaysSection() {
  const { _ } = useLingui();

  return (
    <Section>
      <Section.Title>
        <Trans>Working Ways</Trans>
      </Section.Title>
      <Section.Content>
        {ww.map((s, i) => (
          <Essay key={i}>
            <Essay.Header>
              <Essay.Title>{_(s.name)}</Essay.Title>
              <Essay.Subtitle>{_(s.subtitle)}</Essay.Subtitle>
            </Essay.Header>
            <Essay.Content>{_(s.description)}</Essay.Content>
          </Essay>
        ))}
      </Section.Content>
    </Section>
  );
}
