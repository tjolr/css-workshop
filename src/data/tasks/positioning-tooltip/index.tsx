import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const tooltipTask: Task = {
  id: "positioning-tooltip",
  title: "Tooltip",
  description:
    "Position a tooltip above a button, centered horizontally with an arrow.",
  template: problem,
  solution: solution,
};
