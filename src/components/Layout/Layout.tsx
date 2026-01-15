import type { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export function Layout({ sidebar, content }: LayoutProps) {
  return (
    <div className="layout">
      <aside className="layout-sidebar">
        {sidebar}
      </aside>
      <main className="layout-content">
        {content}
      </main>
    </div>
  );
}
