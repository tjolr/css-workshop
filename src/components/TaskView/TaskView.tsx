import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState } from 'react';
import type { Task } from '../../types/task';
import { Homepage } from '../Homepage';
import './TaskView.css';

interface TaskViewProps {
  task: Task | null;
}

export function TaskView({ task }: TaskViewProps) {
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const containerWidth = rect.width;
    const minWidth = 200;
    const handleWidth = 8;

    const mouseX = e.clientX - rect.left;
    let newLeftWidth = (mouseX / containerWidth) * 100;

    const minPercent = (minWidth / containerWidth) * 100;
    const maxPercent = 100 - minPercent - (handleWidth / containerWidth) * 100;

    newLeftWidth = Math.max(minPercent, Math.min(maxPercent, newLeftWidth));
    setLeftWidth(newLeftWidth);
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  const attachListeners = useCallback(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const onDragStart = useCallback(() => {
    handleMouseDown();
    const cleanup = attachListeners();
    const originalMouseUp = handleMouseUp;
    const wrappedMouseUp = () => {
      originalMouseUp();
      cleanup();
    };
    document.removeEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseup', wrappedMouseUp, { once: true });
  }, [handleMouseDown, attachListeners, handleMouseUp]);

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
           Forkunnskap <FontAwesomeIcon icon={faExternalLink} />
        </a>
      )}
      <div className="task-view-panels" ref={containerRef}>
        <div className="task-view-panel" style={{ width: `calc(${leftWidth}% - 4px)` }}>
          <h3 className="task-view-panel-title">Oppgave</h3>
          <div className="task-view-panel-content">
            {task.template}
          </div>
        </div>
        <div
          className="task-view-divider"
          onMouseDown={onDragStart}
        />
        <div className="task-view-panel" style={{ width: `calc(${100 - leftWidth}% - 4px)` }}>
          <h3 className="task-view-panel-title">Løsning</h3>
          <div className="task-view-panel-content">
            {task.solution}
          </div>
        </div>
      </div>
    </div>
  );
}
