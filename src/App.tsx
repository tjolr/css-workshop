import { useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { TaskList } from './components/TaskList/TaskList';
import { TaskView } from './components/TaskView/TaskView';
import { tasks } from './data/tasks';
import './App.css';

function App() {
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) || null;

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
