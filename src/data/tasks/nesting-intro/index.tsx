import type { Task } from "../../../types/task";
import { NestingIntro } from "./NestingIntro";

export const nestingIntroTask: Task = {
  id: "nesting-intro",
  title: "Intro",
  content: <NestingIntro />,
};
