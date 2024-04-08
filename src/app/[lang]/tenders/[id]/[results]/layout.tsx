import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | Результаты тендера',
  description: 'Страница о результатах тендера УРО',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
