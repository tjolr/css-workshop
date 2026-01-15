import type { Task } from '../../types/task';
import './TaskView.css';

interface TaskViewProps {
  task: Task | null;
}

export function TaskView({ task }: TaskViewProps) {
  if (!task) {
    return (
      <div className="task-view-empty">
        <p>Select a task from the list to get started</p>
      </div>
    );
  }

  return (
    <div className="task-view">
      <h1 className="task-view-title">{task.title}</h1>
      {task.description && (
        <p className="task-view-description">{task.description}</p>
      )}
      <div className="task-view-panels">
        <div className="task-view-panel">
          <h3 className="task-view-panel-title">Task</h3>
          <div className="task-view-panel-content">
            {task.template}
          </div>
        </div>
        <div className="task-view-panel">
          <h3 className="task-view-panel-title">Solution</h3>
          <div className="task-view-panel-content">
            {task.solution}
          </div>
        </div>
      </div>
    </div>
  );
}
