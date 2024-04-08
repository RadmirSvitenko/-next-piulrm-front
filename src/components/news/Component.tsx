'use client';

import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';

const News: React.FC = () => {
  const [news, setNews]: any = useState([]);
  const router = useRouter();

  const handleGetNews = useCallback(async () => {
    const response = await API.get('news/');
    const data = response.data.results;
    setNews(data);
  }, []);

  useEffect(() => {
    handleGetNews();
  }, [handleGetNews]);

  return (
    <div
      className={
        'flex flex-wrap min-h-screen justify-evenly gap-[40px] pt-[54px] px-[120px] pb-[50px] sm:flex sm:flex-col items-center sm:py-[40px] sm:px-[16px] sm:gap-[20px]  bg-[#E5F0FA] relative sm:bg-[#E5F0FA]'
      }
    >
      <img
        src="/c-left.png"
        alt="c-left-abs"
        className={'absolute left-0 top-[70%] z-0 sm:hidden'}
      />
      <img
        src="/c-right.png"
        alt="c-right-abs"
        className={'absolute right-0 top-[30%] z-0 sm:hidden'}
      />
      {news?.map((event: any) => (
        <div
          key={event.id}
          onClick={() => router.push(`news/${event.id}`)}
          className={
            'flex flex-col hover:cursor-pointer w-[270px] min-h-[186px] h-auto gap-[12px] z-10'
          }
        >
          <img
            src={event?.photo}
            alt={event?.title}
            className="w-full h-[150px] rounded-md"
          />
          <p
            className={
              'font-[600] h-[80px] text-[12px] text-[#000] hover:underline w-full cursor-pointer whitespace-pre-wrap  w-max-200px break-words overflow-hidden'
            }
          >
            {event?.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default News;
