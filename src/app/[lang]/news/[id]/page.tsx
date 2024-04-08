import React from 'react';
import AboutNews from '../../../../components/aboutNews/Component';
import { getDictionary } from '../../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);
  return <AboutNews dict={dict} />;
};

export default Page;
