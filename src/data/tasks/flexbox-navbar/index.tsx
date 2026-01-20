import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const flexboxNavbarTask: Task = {
  id: "flexbox-navbar",
  title: "Navigation Bar",
  description:
    "Lag en responsiv navigasjonsbar med logo til venstre og menyelementer til høyre ved hjelp av Flexbox.",
  template: problem,
  solution: solution,
};
