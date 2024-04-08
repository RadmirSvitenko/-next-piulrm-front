import React from 'react';
import Feedback from '../../../components/feedback/Component';
import { getDictionary } from '../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);
  return <Feedback dict={dict} />;
};

export default Page;
