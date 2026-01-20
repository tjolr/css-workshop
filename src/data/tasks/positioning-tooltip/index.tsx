import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const tooltipTask: Task = {
  id: "positioning-tooltip",
  title: "Tooltip",
  description:
    "Plasser en tooltip over en knapp, sentrert horisontalt med en pil.",
  template: problem,
  solution: solution,
};
