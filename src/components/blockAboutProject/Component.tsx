'use client';

import React from 'react';

const BlockAboutProject: React.FC = ({ dict }) => {
  return (
    <div
      className={
        'w-[50%] shadow-md md:w-[80%] sm:order-first sm:w-full p-5 bg-white rounded-xl gap-7 flex flex-col leading-relaxed'
      }
    >
      <h3 className={'text-[#128DFF]'}>{dict?.home?.aboutProject?.title}</h3>

      <p className={'font-normal text-[#000] text-[17px]'}>
        {dict?.home?.aboutProject?.one}
      </p>

      <p className={'font-normal text-[#000] text-[17px]'}>
        {dict?.home?.aboutProject?.two}
      </p>

      <p className={'font-normal text-[#000] text-[17px]'}>
        {dict?.home?.aboutProject?.three}
      </p>

      <p className={'font-normal text-[#000] text-[17px]'}>
        {dict?.home?.aboutProject?.four}
      </p>
    </div>
  );
};

export default BlockAboutProject;
