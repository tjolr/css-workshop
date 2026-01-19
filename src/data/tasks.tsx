import type { Task } from "../types/task";
import { transformTask } from "./tasks/transform";
import { glassmorphismTask } from "./tasks/glassmorphism";
import { notificationBadgeTask } from "./tasks/positioning-notification-badge";
import { tooltipTask } from "./tasks/positioning-tooltip";
import { inputIconsTask } from "./tasks/positioning-input-icons";
import { userAvatarsTask } from "./tasks/positioning-user-avatars";
import { centeringTask } from "./tasks/flexbox-centering";
import { cardGridTask } from "./tasks/flexbox-card-grid";
import { holyGrailTask } from "./tasks/flexbox-holy-grail";

const positioningTask: Task = {
  id: "positioning",
  title: "Positioning",
  subtasks: [notificationBadgeTask, tooltipTask, inputIconsTask, userAvatarsTask],
};

const flexboxGridTask: Task = {
  id: "flexbox-vs-grid",
  title: "Flexbox vs Grid",
  subtasks: [centeringTask, cardGridTask, holyGrailTask],
};

export const tasks: Task[] = [transformTask, glassmorphismTask, positioningTask, flexboxGridTask];
