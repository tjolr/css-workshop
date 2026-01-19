import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const notificationBadgeTask: Task = {
  id: "positioning-notification-badge",
  title: "Notification Badge",
  description:
    "Recreate a Facebook-style notification badge on a bell icon using absolute/relative positioning.",
  template: problem,
  solution: solution,
};
