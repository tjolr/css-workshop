import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const flexboxNavbarTask: Task = {
  id: "flexbox-navbar",
  title: "Navigation Bar",
  description:
    "Create a responsive navigation bar with a logo on the left and menu items on the right using Flexbox.",
  template: problem,
  solution: solution,
};
