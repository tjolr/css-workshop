import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const transformTask: Task = {
  id: "transform",
  title: "Transform",
  description:
    "Gjenskape Slack sin emoji-reaksjons-popup ved hjelp av CSS transforms, transition og bakgrunnsfarger.",
  template: problem,
  solution: solution,
};
