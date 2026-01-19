import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const nestingCardTask: Task = {
  id: "nesting-card",
  title: "Nested Card",
  description:
    "Refactor flat CSS into nested CSS. Move all the child selectors inside the .card parent to keep related styles grouped together.",
    link: "https://www.youtube.com/watch?v=h4Xp1QgNkhU",
  template: problem,
  solution: solution,
};
