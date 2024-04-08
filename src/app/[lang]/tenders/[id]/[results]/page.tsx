import React from 'react';
import TenderResult from '../../../../../components/tenderResult/Component';
import { getDictionary } from '../../../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);

  return <TenderResult dict={dict} />;
};

export default Page;
