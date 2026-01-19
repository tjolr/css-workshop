import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const centeringTask: Task = {
  id: "flexbox-centering",
  title: "Perfect Centering",
  description:
    "Center an element both horizontally and vertically. Try using either flexbox or grid - both can achieve this with minimal code!",
  template: problem,
  solution: solution,
};
