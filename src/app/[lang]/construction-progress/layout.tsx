import { Metadata } from 'next';
// import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

export const metadata: Metadata = {
  title: 'УРО | Ход строительства',
  description: 'Ход строительства управления оползнями КР',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
