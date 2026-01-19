import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const holyGrailTask: Task = {
  id: "flexbox-holy-grail",
  title: "Holy Grail Layout",
  description:
    "Build the classic 'Holy Grail' layout using CSS Grid's template areas. This pattern features a header, sidebar, main content area, and footer.",
  template: problem,
  solution: solution,
};
