import React, { useCallback, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { IconButton } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import { API } from '../../requester';

Chart.register(ArcElement, Tooltip, Legend);

const ModalMapInfo: React.FC<{ id: number; setVisibility: any }> = ({
  id,
  setVisibility,
}) => {
  const options: any = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const [point, setPoint]: any = useState({
    backgroundColor: ['#1F4BBC', '#C7D0FF'],
    hoverOffset: 4,
  });

  const handleGetPoint = useCallback(async () => {
    const response = await API.get(`points/${id}/`);
    const data = await response.data;
    setPoint((prevValue: any) => ({ ...prevValue, ...data }));
  }, [id]);

  useEffect(() => {
    handleGetPoint();
  }, [handleGetPoint]);

  return (
    <div
      className={
        'flex absolute right-0 top-0 m-[30px] flex-col gap-4 w-[304px] sm:w-full sm:bottom-0 sm:right-0 sm:m-auto py-4 px-5 rounded-xl bg-white z-30'
      }
    >
      <div className={'w-full justify-between items-center flex'}>
        <span
          className={
            'w-64 truncate overflow-ellipsis text-[18px] font-[700] text-[#000000]'
          }
        >
          {point?.name}
        </span>

        <IconButton onClick={() => setVisibility(false)}>
          <CloseRounded />
        </IconButton>
      </div>
      <Doughnut
        data={{
          labels: ['Завершено', 'Осталось'],
          datasets: [
            {
              data: [point?.finished, 100 - point?.finished],
              backgroundColor: ['#1F4BBC', '#C7D0FF'],
              hoverOffset: 4,
            },
          ],
        }}
        options={options}
      ></Doughnut>

      <div className={'flex flex-col gap-[6px]'}>
        <p className={' text-[14px] font-[500] text-[#A6AEB6]'}>
          Местоположение:
        </p>

        <p className={' text-[16px] font-[500] text-[#1A1A1A]'}>
          {point?.location}
        </p>
      </div>

      <div className={'flex flex-col gap-[6px]'}>
        <p className={' text-[14px] font-[500] text-[#A6AEB6]'}>Координаты:</p>

        <p className={' text-[16px] font-[500] text-[#1A1A1A]'}>
          {point?.latitude}° N , {point?.longitude}° W
        </p>
      </div>

      <div className={'flex justify-between gap-[6px]'}>
        <div className={'flex flex-col justify-between gap-[6px]'}>
          <p className={' text-[14px] font-[500] text-[#A6AEB6]'}>Глубина:</p>

          <p className={' text-[16px] font-[500] text-[#1A1A1A]'}>
            {point?.depth} метров
          </p>
        </div>

        <div className={'flex flex-col justify-between gap-[6px]'}>
          <p className={' text-[14px] font-[500] text-[#A6AEB6]'}>
            Температура:
          </p>

          <p className={' text-[16px] font-[500] text-[#1A1A1A]'}>
            {point?.temperature} °C
          </p>
        </div>
      </div>

      <div className={'flex flex-col gap-[6px]'}></div>

      <div className={'flex flex-col gap-[6px]'}>
        <p className={' text-[14px] font-[500] text-[#A6AEB6]'}>
          Скорость оползневых процессов:
        </p>

        <p className={' text-[16px] font-[500] text-[#1A1A1A]'}>
          {point?.speed} метра в год
        </p>
      </div>
    </div>
  );
};

export default ModalMapInfo;
