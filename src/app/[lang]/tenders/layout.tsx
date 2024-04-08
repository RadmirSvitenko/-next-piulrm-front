import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | Тендеры',
  description: 'Детальная страница тендера УРО',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
