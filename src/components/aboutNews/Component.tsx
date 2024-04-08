'use client';

import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';

const AboutNews: React.FC = ({ dict }: any) => {
  const [event, setEvent]: any = useState({});

  const router = useRouter();
  const { lang, id } = useParams();

  const handleGetEvent = useCallback(async () => {
    const response = await API.get(`news/${id}`);
    const data = response.data;
    console.log('data: ', data);
    setEvent(data);
  }, []);

  useEffect(() => {
    handleGetEvent();
  }, [handleGetEvent]);

  const toNews = () => {
    router.push(`/${lang}/news`);
  };

  return (
    <div
      className={
        'flex justify-center items-center pt-[20px] px-[100px] pb-[64px] sm:px-[16px] sm:pb-[60px] sm:pt-[20px] h-auto min-h-screen'
      }
    >
      <div className={'flex w-full flex-col flex-wrap gap-8'}>
        <div
          className={
            'flex items-center justify-start gap-2 sm:gap-5 sm:px-[16px]  hover:cursor-pointer py-1 px-2 rounded hover:bg-[#F5F5F5] hover:transition-[0.7s] transition-[0.7s]'
          }
          onClick={() => toNews()}
        >
          <ArrowBack sx={{ width: '20px', height: '20px', color: '#1A1A1A' }} />
          <span className={'text-[#1A1A1A] font-[700] text-[18px]'}>
            {dict?.back}
          </span>
        </div>

        <p
          className={
            'text-[#1A1A1A] text-start text-wrap font-[700] text-[42px] sm:text-[30px] sm:px-[16px]'
          }
        >
          {event?.title}
        </p>

        <div
          className={
            'flex w-full justify-between items-start pt-[20px] pb-[64px] sm:px-[16px] sm:pb-[60px] bg-[#fff] text-[#1A1A1A] flex-wrap sm:pt-[20px] h-auto min-h-screen'
          }
        >
          <div dangerouslySetInnerHTML={{ __html: event?.target }} />
        </div>
      </div>
    </div>
  );
};

export default AboutNews;
