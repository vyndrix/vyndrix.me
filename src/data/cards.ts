import { IconsNames } from "@/components/ui/icon";
import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

const cards: {
  icon: IconsNames;
  name: string;
  text: MessageDescriptor;
  related: {
    icon: IconsNames;
    name: string | MessageDescriptor;
  }[];
}[] = [
  {
    icon: "react-native",
    name: "React Native",
    text: msg`My primary platform for the past few years. Experienced with component architecture, performance considerations, animations, and platform-specific constraints`,
    related: [
      { icon: "reanimated", name: "Reanimated" },
      { icon: "axios", name: "Axios" },
      { icon: "react-hook-form", name: "React Hook Form" },
    ],
  },
  {
    icon: "expo",
    name: "Expo",
    text: msg`Extensive experience using Expo to streamline mobile development workflows. Familiar with build pipelines, release processes, and leveraging Expo’s ecosystem to improve developer productivity`,
    related: [
      { icon: "eas-build", name: "EAS Build" },
      { icon: "eas-updates", name: "EAS Update" },
      { icon: "stores", name: "App Store / Play Store" },
    ],
  },
  {
    icon: "javascript",
    name: "Javascript",
    text: msg`Strong command of modern JavaScript standards and patterns. This was developed through optimizing React and React Native applications for the past few years`,
    related: [
      { icon: "es6", name: "ES6+" },
      { icon: "async", name: "Async / Promises" },
      { icon: "functional", name: "Functional patterns" },
    ],
  },
  {
    icon: "react",
    name: "React",
    text: msg`Experience building component-driven web interfaces with React. My background in mobile development strongly influences how I structure and design UI on the web`,
    related: [
      { icon: "tailwind", name: "Tailwindcss" },
      { icon: "motion", name: "Motion" },
      { icon: "react-query", name: "TanStack Query" },
    ],
  },
];

export default cards;
