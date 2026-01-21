import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const textOverflowTask: Task = {
  id: "text-overflow",
  title: "Text Overflow",
  description:
    "Lag kort-komponenter der lange tekster trunkeres med ellipsis etter et gitt antall linjer ved hjelp av -webkit-line-clamp.",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-overflow",
  template: problem,
  solution: solution,
};
