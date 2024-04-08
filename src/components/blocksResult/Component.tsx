'use client';

import Image from 'next/image';
import React from 'react';

const BlocksResult = ({ dict }) => {
  return (
    <div className="flex flex-col md:flex md:flex-wrap z-20 gap-[27px] justify-between w-[20%] md:w-[80%] sm:w-full">
      <div className="w-245px shadow-md z-20 h-full flex flex-col justify-center gap-2.5 items-center  font-semibold rounded-xl bg-white">
        <Image
          src={'/result-one.svg'}
          alt={'result-one'}
          width={80}
          height={84}
        />
        <span
          className={
            'text-center text-[#000]  font-[500] text-[11px] tracking-[0.2px] p-[10px] sm:px-[60px]'
          }
        >
          {dict?.home?.results?.one}
        </span>
      </div>
      <div className="w-245px shadow-md z-20 h-full flex flex-col justify-center gap-2.5 items-center  font-semibold rounded-xl bg-white">
        <Image
          src={'/result-two.svg'}
          alt={'result-two'}
          width={80}
          height={84}
        />
        <span
          className={
            'text-center text-[#000]  font-[500] text-[11px] tracking-[0.2px] p-[10px] sm:px-[60px]'
          }
        >
          {dict?.home?.results?.two}
        </span>
      </div>
      <div className="w-245px shadow-md z-20 h-full flex flex-col justify-center gap-2.5 items-center  font-semibold rounded-xl bg-white">
        <Image
          src={'/result-three.svg'}
          alt={'result-three'}
          width={80}
          height={84}
        />
        <span
          className={
            'text-center text-[#000]  font-[500] text-[11px] tracking-[0.2px] p-[10px] sm:px-[60px]'
          }
        >
          {dict?.home?.results?.three}
        </span>
      </div>
    </div>
  );
};

export default BlocksResult;
