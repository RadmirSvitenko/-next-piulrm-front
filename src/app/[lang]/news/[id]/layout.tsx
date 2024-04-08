import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | О новости',
  description: 'Страница о новости УРО',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
