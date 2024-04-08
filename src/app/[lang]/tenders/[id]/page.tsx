import React from 'react';
import Tender from '../../../../components/tender/Component';
import { getDictionary } from '../../../dictionaries';

const TenderDetails: React.FC = async ({ params: { lang } }: any) => {
  const dict: any = await getDictionary(lang);
  return (
    <div>
      <Tender dict={dict}/>
    </div>
  );
};

export default TenderDetails;
