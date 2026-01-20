import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const clampSizingTask: Task = {
  id: "clamp-sizing",
  title: "Clamp Sizing",
  description:
    "Bruk clamp() for å lage et responsivt kort som har en minimumsbredde (300px), en maksbredde (600px), og en optimal mellomverdi (50vw).",
  template: problem,
  solution: solution,
};
