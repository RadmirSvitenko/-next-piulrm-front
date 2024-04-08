import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | Обратная связь',
  description: 'Страница обратной связи УРО',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
