import React from 'react';
import Home from './home/page';
import { Metadata } from 'next';
import { getDictionary } from '../dictionaries';

export const metadata: Metadata = {
  title: 'УРО | Главная',
  description: 'Управление оползнями КР',
};

const MainPage = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang);

  return <Home dict={dict} />;
};

export default MainPage;
