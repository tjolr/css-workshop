import type { Task } from "../types/task";
import { transformTask } from "./tasks/transform";
import { glassmorphismTask } from "./tasks/glassmorphism";
import { notificationBadgeTask } from "./tasks/positioning-notification-badge";
import { tooltipTask } from "./tasks/positioning-tooltip";
import { inputIconsTask } from "./tasks/positioning-input-icons";
import { userAvatarsTask } from "./tasks/positioning-user-avatars";
import { nestingCardTask } from "./tasks/nesting-card";
import { flexboxVsGridIntroTask } from "./tasks/flexbox-vs-grid-intro";
import { flexboxNavbarTask } from "./tasks/flexbox-navbar";
import { gridDashboardTask } from "./tasks/grid-dashboard";
import { preprocessorsIntroTask } from "./tasks/preprocessors-intro";

const positioningTask: Task = {
  id: "positioning",
  title: "Positioning",
  subtasks: [notificationBadgeTask, tooltipTask, inputIconsTask, userAvatarsTask],
};

const nestingTask: Task = {
  id: "nesting",
  title: "Nesting",
  description: "Watch first: https://www.youtube.com/watch?v=h4Xp1QgNkhU",
  subtasks: [nestingCardTask],
};

const flexboxVsGridTask: Task = {
  id: "flexbox-vs-grid",
  title: "Flexbox vs Grid",
  subtasks: [flexboxVsGridIntroTask, flexboxNavbarTask, gridDashboardTask],
};

const preprocessorsTask: Task = {
  id: "preprocessors",
  title: "Preprocessors",
  subtasks: [preprocessorsIntroTask],
};

export const tasks: Task[] = [nestingTask, transformTask, glassmorphismTask, positioningTask, flexboxVsGridTask, preprocessorsTask];
