import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const task1: Task = {
  id: "task-1",
  title: "Task 1: Transform",
  description:
    "Recreate the Slack emoji reaction popup using CSS transforms, transition and background colors",
  template: problem,
  solution: solution,
};
