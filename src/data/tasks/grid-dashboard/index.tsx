import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const gridDashboardTask: Task = {
  id: "grid-dashboard",
  title: "Dashboard Cards",
  description:
    "Create a dashboard layout with cards of varying sizes using CSS Grid, with some cards spanning multiple columns or rows.",
  template: problem,
  solution: solution,
};
