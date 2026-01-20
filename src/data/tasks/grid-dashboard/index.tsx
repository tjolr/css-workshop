import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const gridDashboardTask: Task = {
  id: "grid-dashboard",
  title: "Dashboard Cards",
  description:
    "Lag et dashboard-oppsett med kort i varierende størrelser ved hjelp av CSS Grid, der noen kort strekker seg over flere kolonner eller rader.",
  template: problem,
  solution: solution,
};
