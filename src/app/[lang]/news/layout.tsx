import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | Новости',
  description: 'Страница новостей УРО',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
