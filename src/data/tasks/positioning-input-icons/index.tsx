import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const inputIconsTask: Task = {
  id: "positioning-input-icons",
  title: "Input with Icons",
  description:
    "Position icons inside an input field - search icon on the left, clear button on the right.",
  template: problem,
  solution: solution,
};
