import React from 'react';
import Tenders from '../../../components/tenders/Component';
import { getDictionary } from '../../dictionaries';

const Page = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);

  return (
    <div>
      <Tenders dict={dict} />
    </div>
  );
};

export default Page;
