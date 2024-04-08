import React from 'react';
import SiteMap from '../../../components/siteMap/Component';
import { getDictionary } from '../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang);
  return <SiteMap dict={dict} />;
};

export default Page;
