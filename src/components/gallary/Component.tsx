'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';

const Gallary: React.FC = () => {
  const [images, setImages]: any = useState([]);

  const handleGetPhotos = useCallback(async () => {
    const response = await API.get('photos/');
    const data = response.data;
    setImages(data);
  }, []);

  useEffect(() => {
    handleGetPhotos();
  }, [handleGetPhotos]);

  return (
    <div
      className={
        'sm:pt-[40px] sm:px-[16px] sm:pb-[56px] pt-[40px] pb-[44px] bg-[#F0F7FF] px-[120px] flex justify-center items-center w-full'
      }
    >
      <div
        className={`sm:flex sm:flex-col ${
          images?.length <= 2 ? 'justify-evenly' : 'justify-start'
        } sm:gap-5 gap-10 flex flex-wrap`}
      >
        {images?.map((imageData: any) => (
          <div
            key={imageData.id}
            className={
              'flex flex-col sm:w-full w-[320px] gap-[10px] rounded-lg'
            }
          >
            <img
              src={imageData?.image}
              alt={imageData?.caption}
              className={'h-[220px]'}
            />
            <span className={'text-[12px] text-[#000] font-[600]'}>
              {imageData?.caption}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
