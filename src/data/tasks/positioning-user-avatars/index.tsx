import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const userAvatarsTask: Task = {
  id: "positioning-user-avatars",
  title: "User Avatars",
  description:
    "Create overlapping circular avatars that take up less horizontal space.",
  template: problem,
  solution: solution,
};
