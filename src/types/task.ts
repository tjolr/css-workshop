import type { ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  description?: string;
  link?: string;
  template?: ReactNode;
  solution?: ReactNode;
  content?: ReactNode;
  subtasks?: Task[];
}
