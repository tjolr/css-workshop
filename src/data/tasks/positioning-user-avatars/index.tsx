import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const userAvatarsTask: Task = {
  id: "positioning-user-avatars",
  title: "User Avatars",
  description:
    "Lag overlappende sirkulære avatarer som tar mindre horisontal plass.",
  template: problem,
  solution: solution,
};
