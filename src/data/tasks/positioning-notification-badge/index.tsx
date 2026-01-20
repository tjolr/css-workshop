import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const notificationBadgeTask: Task = {
  id: "positioning-notification-badge",
  title: "Notification Badge",
  description:
    "Gjenskape en Facebook-lignende varselindikator på et bjelle-ikon ved hjelp av absolute/relative positioning.",
  template: problem,
  solution: solution,
};
