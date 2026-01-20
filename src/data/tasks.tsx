import type { Task } from "../types/task";
import { transformTask } from "./tasks/transform";
import { glassmorphismTask } from "./tasks/glassmorphism";
import { notificationBadgeTask } from "./tasks/positioning-notification-badge";
import { tooltipTask } from "./tasks/positioning-tooltip";
import { inputIconsTask } from "./tasks/positioning-input-icons";
import { userAvatarsTask } from "./tasks/positioning-user-avatars";
import { nestingIntroTask } from "./tasks/nesting-intro";
import { nestingCardTask } from "./tasks/nesting-card";
import { flexboxVsGridIntroTask } from "./tasks/flexbox-vs-grid-intro";
import { flexboxNavbarTask } from "./tasks/flexbox-navbar";
import { gridDashboardTask } from "./tasks/grid-dashboard";
import { mediaContainerTask } from "./tasks/group-media-container";
import { groupPreprocessorsTask } from "./tasks/group-preprocessors";
import { advancedSelectorsTask } from "./tasks/group-advanced-selectors";

const positioningTask: Task = {
  id: "positioning",
  title: "Positioning",
  subtasks: [notificationBadgeTask, tooltipTask, inputIconsTask, userAvatarsTask],
};

const nestingTask: Task = {
  id: "nesting",
  title: "Nesting",
  subtasks: [nestingIntroTask, nestingCardTask],
};

const flexboxVsGridTask: Task = {
  id: "flexbox-vs-grid",
  title: "Flexbox vs Grid",
  subtasks: [flexboxVsGridIntroTask, flexboxNavbarTask, gridDashboardTask],
};

const gruppeoppgaverTask: Task = {
  id: "gruppeoppgaver",
  title: "Gruppeoppgaver",
  subtasks: [mediaContainerTask, groupPreprocessorsTask, advancedSelectorsTask],
};

export const tasks: Task[] = [nestingTask, transformTask, glassmorphismTask, positioningTask, flexboxVsGridTask, gruppeoppgaverTask];
