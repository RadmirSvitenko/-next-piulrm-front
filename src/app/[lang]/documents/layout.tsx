import { Metadata } from 'next';
import React from 'react';
// import faviconUrl from '../../../public/favicon.ico';
const faviconUrl = '/favicon.ico';

export const metadata: Metadata = {
  title: 'УРО | Документы',
  description: 'Страница документов УРО',
  icons: faviconUrl,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
