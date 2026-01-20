import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskView } from "./components/TaskView/TaskView";
import { tasks } from "./data/tasks";
import type { Task } from "./types/task";

function findTask(tasks: Task[], id: string | null): Task | null {
  if (!id) return null;
  for (const task of tasks) {
    if (task.id === id) return task;
    if (task.subtasks) {
      const found = findTask(task.subtasks, id);
      if (found) return found;
    }
  }
  return null;
}

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const selectedTask = findTask(tasks, selectedTaskId);

  return (
    <Layout
      sidebar={
        <TaskList
          tasks={tasks}
          selectedTaskId={selectedTaskId}
          onSelectTask={setSelectedTaskId}
        />
      }
      content={<TaskView task={selectedTask} />}
    />
  );
}

export default App;
