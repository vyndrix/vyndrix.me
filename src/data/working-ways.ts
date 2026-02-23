import { MessageDescriptor } from "@lingui/core";
import { msg } from "@lingui/core/macro";

export const ways: {
  name: MessageDescriptor;
  subtitle: MessageDescriptor;
  description: MessageDescriptor;
}[] = [
  {
    name: msg`Collaboration & Agile Delivery`,
    subtitle: msg`Working in rhythm with teams to ship iteratively and consistently`,
    description: msg`Hands-on experience working in Scrum-based environments, contributing to planning, reviews, and retrospectives. Used to colabotare and work closely with designers, QA, and backend engineers to keep delivery predictable and focused`,
  },
  {
    name: msg`Communication & Team Support`,
    subtitle: msg`Building strong working relationships across disciplines`,
    description: msg`Comfortable working closely with people from different roles, especially designers and product stakeholders, to turn ideas into interfaces. Often involved in supporting teammates through discussions, feedback, and shared problem-solving`,
  },
  {
    name: msg`Technical Leadership & Mentorship`,
    subtitle: msg`Leading by example, clarity, and technical ownership`,
    description: msg`Acted as a team lead for around two years, supporting engineers through code reviews, technical discussions, and day-to-day decision making. Focused on maintaining code quality, encouraging good engineering practices, and helping teammates grow while keeping the team aligned`,
  },
];

export default ways;
