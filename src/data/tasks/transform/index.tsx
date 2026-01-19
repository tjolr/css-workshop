import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const transformTask: Task = {
  id: "transform",
  title: "Transform",
  description:
    "Recreate the Slack emoji reaction popup using CSS transforms, transition and background colors",
  template: problem,
  solution: solution,
};
