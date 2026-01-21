import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const glassmorphismTask: Task = {
  id: "glassmorphism",
  title: "Glassmorphism",
  description:
    "Lag en frosted glass-effekt på et kort ved hjelp av backdrop-filter og semi-transparente bakgrunner.",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter",
  template: problem,
  solution: solution,
};
