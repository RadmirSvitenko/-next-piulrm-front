import React from 'react';
import { getDictionary } from '../../dictionaries';

const Contacts: React.FC = async ({ params: { lang } }: any) => {
  const dict = await getDictionary(lang);

  return (
    <div
      className={
        'sm:bg-[#F0F7FF] w-full bg-[#F0F7FF] flex justify-center items-center sm:pt-[20px] sm:px-4 sm:pb-10 pt-[40px] px-2 pb-[104px]'
      }
    >
      <div
        className={
          'flex sm:flex-col flex-wrap items-center md:flex-col md:items-center justify-between lg:justify-center midmd:justify-center sm:items-center gap-[100px]'
        }
      >
        <div
          className={
            'w-[320px] sm:w-full md:flex-col md:items-center flex-wrap'
          }
        >
          <p className={'text-[700] text-[36px] text-[#1A1A1A] '}>
            {dict?.contacts?.title}
          </p>

          <span className={'text-[700] text-[22px] text-[#1A1A1A] text-wrap'}>
            {dict?.contacts?.description}
          </span>
        </div>

        <div
          className={
            'flex sm:flex-col sm:gap-11 gap-[100px] md:flex-col md:items-center flex-wrap'
          }
        >
          <span className={'text-[700] text-[16px] text-[#1A1A1A]'}>
            {dict?.contacts?.number}
          </span>

          <span className={'text-[700] text-[16px] text-[#1A1A1A]'}>
            {dict?.contacts?.mail}
          </span>

          <span className={'text-[700] text-[16px] text-[#1A1A1A]'}>
            {dict?.contacts?.address}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
