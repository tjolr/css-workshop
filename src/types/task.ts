import type { ReactNode } from 'react';

export interface Task {
  id: string;
  title: string;
  description?: string;
  template: ReactNode;
  solution: ReactNode;
}
