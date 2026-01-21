import type { Task } from "../../../types/task";
import { problem } from "./problem";
import { solution } from "./solution";

export const scrollSnapTask: Task = {
  id: "scroll-snap",
  title: "Scroll Snap",
  description:
    "Lag et horisontalt bildegalleri med scroll-snap-type og scroll-snap-align som snapper til hvert bilde.",
  link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/scroll-snap-type",
  template: problem,
  solution: solution,
};
