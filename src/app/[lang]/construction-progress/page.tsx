import React from 'react';
import ConstructionProgress from '../../../components/сonstructionProgress/Component';
import { getDictionary } from '../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);

  return <ConstructionProgress dict={dict} />;
};

export default Page;
