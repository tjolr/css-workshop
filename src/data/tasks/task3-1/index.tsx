import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const task3_1: Task = {
  id: "task-3-1",
  title: "3.1 Notification Badge",
  description:
    "Recreate a Facebook-style notification badge on a bell icon using absolute/relative positioning.",
  template: problem,
  solution: solution,
};
