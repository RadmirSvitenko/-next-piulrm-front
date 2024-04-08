'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';
import { useParams, useRouter } from 'next/navigation';
import { ArrowBack } from '@mui/icons-material';

const Tender: React.FC = ({ dict }: any) => {
  const [tender, setTender]: any = useState();

  const { lang, id } = useParams();
  const router = useRouter();

  const handleGetTender = useCallback(async () => {
    const response = await API.get(`tenders/${id}/`);
    const data = response.data;
    setTender(data);
  }, []);

  const toTenders = () => {
    router.push(`/${lang}/tenders`);
  };

  useEffect(() => {
    handleGetTender();
  }, [handleGetTender]);

  return (
    <div
      className={
        'flex justify-start items-center pt-[20px] px-[100px] pb-[64px] sm:px-[16px] sm:pb-[60px] sm:pt-[20px] h-auto min-h-screen'
      }
    >
      <div className={'flex w-full flex-col flex-wrap gap-8'}>
        <div
          className={
            'flex w-auto items-center gap-2 hover:cursor-pointer py-1 px-2 rounded hover:bg-[#F5F5F5] hover:transition-[0.7s] transition-[0.7s]'
          }
          onClick={() => toTenders()}
        >
          <ArrowBack sx={{ width: '20px', height: '20px', color: '#1A1A1A' }} />
          <span className={'text-[#1A1A1A]  font-[700] text-[18px]'}>
            {dict?.back}
          </span>
        </div>
        <p
          className={
            'text-[#1A1A1A] text-start text-wrap  font-[700] text-[42px] sm:text-[30px] sm:px-[16px]'
          }
        >
          {tender?.name}
        </p>

        <div
          className={
            'flex w-full justify-between items-start pt-[20px] pb-[64px] sm:px-[16px] sm:pb-[60px] bg-[#fff] text-[#1A1A1A] flex-wrap sm:pt-[20px] h-auto min-h-screen'
          }
        >
          <div dangerouslySetInnerHTML={{ __html: tender?.description }} />
        </div>
      </div>
    </div>
  );
};

export default Tender;
