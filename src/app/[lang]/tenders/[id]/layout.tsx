import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'УРО | О тендере',
  description: 'Страница о тендере УРО',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
