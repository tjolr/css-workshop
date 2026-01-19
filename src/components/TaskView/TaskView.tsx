import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Task } from '../../types/task';
import { Homepage } from '../Homepage';
import './TaskView.css';

interface TaskViewProps {
  task: Task | null;
}

export function TaskView({ task }: TaskViewProps) {
  if (!task) {
    return <Homepage />;
  }

  // Render content page (intro pages, etc.)
  if (task.content) {
    return <div className="task-view task-view-content">{task.content}</div>;
  }

  return (
    <div className="task-view">
      <h1 className="task-view-title">{task.title}</h1>
      {task.description && (
        <p className="task-view-description">{task.description}</p>
      )}
      {task.link && (
        <a className="task-view-link" href={task.link} target="_blank" rel="noopener noreferrer">
           Preliminary knowledge <FontAwesomeIcon icon={faExternalLink} />
        </a>
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
