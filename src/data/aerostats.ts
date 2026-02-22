import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

export const aerostats: {
  position: { x: number; y: number };
  content: string | MessageDescriptor;
  withArrow?: boolean;
}[] = [
  {
    position: { x: 320, y: 432 },
    content: msg`Hi 😄`,
    withArrow: true,
  },
  { position: { x: 400, y: 272 }, content: "🎥" },
  { position: { x: 60, y: 512 }, content: "💭" },
  { position: { x: 100, y: 272 }, content: "☕" },
  { position: { x: 265, y: 92 }, content: "🐈" },
  { position: { x: 320, y: 592 }, content: "🧠" },
];
