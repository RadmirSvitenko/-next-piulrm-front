import { Metadata } from 'next';
// import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

export const metadata: Metadata = {
  title: 'УРО | Результат поиска',
  description: 'Результат поиска управления оползнями КР',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
