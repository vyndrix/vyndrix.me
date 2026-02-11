import cds from "@/data/cards";
import { useIsDesktopLike } from "@/hooks/use-is-desktop-like";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { Badge, Card, Grid, Icon, Section } from "./ui";

export function SkillsSection() {
  const { _ } = useLingui();
  const isDesktopLike = useIsDesktopLike();

  return (
    <Section>
      <Section.Title>
        <Trans>Core Skills</Trans>
      </Section.Title>
      <Section.Content>
        <Grid>
          {cds.map((cd, i) => (
            <Card key={i} animated={isDesktopLike}>
              <Card.Header>
                <Icon icon={cd.icon} />
                <Card.Title size="lg">{cd.name}</Card.Title>
              </Card.Header>
              <Card.Content>{_(cd.text)}</Card.Content>
              <Card.Footer>
                <Card.Title>
                  <Trans>Related skills</Trans>
                </Card.Title>
                <Badge.Group className="pointer-events-none">
                  {cd.related.map((rs, j) => (
                    <Badge key={j} className="pointer-events-none">
                      <Badge.Icon
                        icon={rs.icon}
                        className="pointer-events-none"
                      />
                      <Badge.Text className="pointer-events-none">
                        {typeof rs.name === "string" ? rs.name : _(rs.name)}
                      </Badge.Text>
                    </Badge>
                  ))}
                </Badge.Group>
              </Card.Footer>
            </Card>
          ))}
        </Grid>
      </Section.Content>
    </Section>
  );
}
