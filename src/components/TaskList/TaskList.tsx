import type { Task } from '../../types/task';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  selectedTaskId: string | null;
  onSelectTask: (taskId: string) => void;
}

export function TaskList({ tasks, selectedTaskId, onSelectTask }: TaskListProps) {
  return (
    <nav className="task-list">
      <h2 className="task-list-title">CSS Workshop</h2>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              className={`task-list-item ${selectedTaskId === task.id ? 'active' : ''}`}
              onClick={() => onSelectTask(task.id)}
            >
              {task.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
