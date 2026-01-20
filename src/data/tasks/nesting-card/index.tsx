import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const nestingCardTask: Task = {
  id: "nesting-card",
  title: "Nested Card",
  description:
    "Refaktorer flat CSS til nested CSS. Flytt alle child-selektorene inn i .card-forelderen for å holde relaterte stiler gruppert sammen.",
    link: "https://www.youtube.com/watch?v=h4Xp1QgNkhU",
  template: problem,
  solution: solution,
};
