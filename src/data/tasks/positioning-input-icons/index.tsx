import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const inputIconsTask: Task = {
  id: "positioning-input-icons",
  title: "Input with Icons",
  description:
    "Plasser ikoner inne i et input-felt - søkeikon til venstre, tøm-knapp til høyre.",
  template: problem,
  solution: solution,
};
