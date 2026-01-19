import type { Task } from "../types/task";
import { task1 } from "./tasks/task1";
import { task2 } from "./tasks/task2";
import { task3_1 } from "./tasks/task3-1";
import { task3_2 } from "./tasks/task3-2";
import { task3_3 } from "./tasks/task3-3";

const task3: Task = {
  id: "task-3",
  title: "Task 3: Positioning",
  subtasks: [task3_1, task3_3, task3_2],
};

export const tasks: Task[] = [task1, task2, task3];
