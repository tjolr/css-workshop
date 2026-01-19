import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const glassmorphismTask: Task = {
  id: "glassmorphism",
  title: "Glassmorphism",
  description:
    "Create a frosted glass card effect using backdrop-filter and semi-transparent backgrounds.",
  template: problem,
  solution: solution,
};
