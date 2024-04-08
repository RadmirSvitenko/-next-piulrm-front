'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ModalMap from '../modalMap/Component';
import { API } from '../../requester';
import './styles.css';
import { useRouter } from 'next/navigation';

const BlockInfo = ({ dict }: any) => {
  const [openMap, setOpenMap] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [news, setNews] = useState([]);

  const router = useRouter();

  const toggleMap = () => {
    setOpenMap((open) => !open);
  };

  const handleGetTenders = useCallback(async () => {
    const response = await API.get('tenders?page_size=3');
    const data = await response.data.results;
    setTenders(data);
  }, []);

  const handleGetNews = useCallback(async () => {
    const response = await API.get('news?page_size=3');
    const data = await response.data.results;
    setNews(data);
  }, []);

  const toDetails = (path: string, id: number) => {
    router.push(`/${path}/${id}`);
  };

  useEffect(() => {
    handleGetTenders();
    handleGetNews();
  }, [handleGetTenders, handleGetNews]);

  return (
    <div
      className={
        'flex overflow-y-auto h-[800px] md:h-auto sm:h-auto scrollbar-hidden py-8 shadow-md flex-col gap-4 pt-10 px-6 md:w-[80%] md:items-center sm:w-full w-[30%] bg-white rounded-xl'
      }
    >
      <p className={'font-[700] text-[#000] text-[14px]'}>
        {dict?.home?.info?.map}
      </p>
      <img
        src="/kg_map.png"
        alt="map"
        className={
          'hover:cursor-pointer w-full h-[200px] md:h-[250px] rounded-lg md:w-[80%]'
        }
        onClick={() => toggleMap()}
      />

      <div>
        <div className={'flex justify-between w-full gap-4 pb-4'}>
          <h4 className={'font-bold'}>{dict?.home?.info?.tenders}</h4>
          <a href="/tenders" className={'text-[#4383FF] hover:underline'}>
            {dict?.home?.info?.allTenders}
          </a>
        </div>

        <div className={'flex flex-col gap-7 justify-between'}>
          {tenders?.map((tender: any) => (
            <p
              key={tender.id}
              onClick={() => toDetails('tenders', tender.id)}
              className={
                'text-[#4383FF] hover:underline hover:cursor-pointer transition duration-1000'
              }
            >
              {tender.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between w-full gap-4 pb-4">
          <h4 className="font-bold"> {dict?.home?.info?.news}</h4>
          <a href="/news" className="text-[#4383FF] hover:underline">
            {dict?.home?.info?.allNews}
          </a>
        </div>

        <div className="relative flex flex-col justify-between">
          {news?.map((event: any) => (
            <div
              key={event.id}
              onClick={() => toDetails('news', event.id)}
              className={
                'text-[#4383FF] hover:underline hover:cursor-pointer transition duration-1000'
              }
            >
              <img
                src={event?.photo}
                alt={event?.title}
                className="midmd:h-[186px] py-3 md:h-[300px] lg:h-[186px] xl:h-[300px] h-[500px] sm:h-[186px] w-full sm:w-full rounded-lg bg-gradient-to-b from-transparent to-blue-100 relative"
              />
              <p>{event?.title}</p>
            </div>
          ))}
        </div>
      </div>

      <ModalMap open={openMap} onClose={toggleMap} dict={dict} />
    </div>
  );
};

export default BlockInfo;
