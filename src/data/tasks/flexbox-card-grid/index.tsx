import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const cardGridTask: Task = {
  id: "flexbox-card-grid",
  title: "Card Grid",
  description:
    "Create a 2-column card grid using CSS Grid. This is a common pattern for feature showcases and dashboards.",
  template: problem,
  solution: solution,
};
