import type { Task } from '../../types/task';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  selectedTaskId: string | null;
  onSelectTask: (taskId: string) => void;
}

function TaskItem({
  task,
  selectedTaskId,
  onSelectTask,
  isSubtask = false
}: {
  task: Task;
  selectedTaskId: string | null;
  onSelectTask: (taskId: string) => void;
  isSubtask?: boolean;
}) {
  const hasSubtasks = task.subtasks && task.subtasks.length > 0;
  const isClickable = task.template !== undefined;

  return (
    <li>
      <button
        className={`task-list-item ${selectedTaskId === task.id ? 'active' : ''} ${isSubtask ? 'subtask' : ''} ${!isClickable ? 'category' : ''}`}
        onClick={() => isClickable && onSelectTask(task.id)}
        disabled={!isClickable}
      >
        {task.title}
      </button>
      {hasSubtasks && (
        <ul className="task-list-subtasks">
          {task.subtasks!.map((subtask) => (
            <TaskItem
              key={subtask.id}
              task={subtask}
              selectedTaskId={selectedTaskId}
              onSelectTask={onSelectTask}
              isSubtask
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function TaskList({ tasks, selectedTaskId, onSelectTask }: TaskListProps) {
  return (
    <nav className="task-list">
      <h2 className="task-list-title">CSS Workshop</h2>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            selectedTaskId={selectedTaskId}
            onSelectTask={onSelectTask}
          />
        ))}
      </ul>
    </nav>
  );
}
