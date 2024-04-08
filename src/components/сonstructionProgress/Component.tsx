'use client';

import React, { useState } from 'react';
import ConstructionSchedule from '../../components/constructionSchedule/Component';
import LandslidePointStatuses from '../../components/landslidePointStatuses/Component';
import ConstructionCost from '../../components/constructionCosts/Component';
import Buildings from '../../components/buildings/Component';
import { Pagination } from '@mui/material';

const ConstructionProgress: React.FC = ({ dict }: any) => {
  const [page, setPage]: any = useState(1);
  // const [count, setCount]: any = useState(1);

  const handleChangePage = (e: any, page: number) => {
    setPage(page);
  };

  // const handleGetGraphData = useCallback(async () => {
  //   const response = await API.get(`graph2?page=${page}`);
  //   const data = await response.data.count;
  //   console.log('data: ', data);
  //   setCount(data);
  // }, [page]);

  // useEffect(() => {
  //   handleGetGraphData();
  // }, [handleGetGraphData]);

  return (
    <div className={'w-full flex flex-col'}>
      <div
        className={
          'w-full h-[700px] relative flex sm:py[40px] items-center py-[60px] px-[100px] md:px-4 sm:px-4 z-20'
        }
      >
        <ConstructionSchedule dict={dict} />
      </div>
      <div
        className={
          'w-full relative h-[850px] flex sm:py[40px] items-center py-[60px] px-[100px] md:px-4 sm:px-4 z-20'
        }
      >
        <img
          src="/c-left.png"
          alt="c-left"
          className={'absolute z-10 bottom-0 left-0 md:hidden sm:hidden'}
        />

        <img
          src="/c-right.png"
          alt="c-right"
          className={'absolute z-10 top-0 right-0 md:hidden sm:hidden'}
        />
        <div className={'flex flex-col z-30 h-[700px] w-full'}>
          <LandslidePointStatuses page={page} dict={dict} />

          <div className={'flex w-full justify-center items-center p-4'}>
            <Pagination
              page={page}
              // count={Math.ceil(count || 1)}
              count={3}
              onChange={handleChangePage}
              hideNextButton
              hidePrevButton
              variant="outlined"
              shape="rounded"
              siblingCount={2}
            />
          </div>
        </div>
      </div>
      <div
        className={
          'w-full relative h-[700px] flex sm:py[40px] items-center py-[60px] px-[100px] md:px-4 sm:px-4 z-20'
        }
      >
        <ConstructionCost dict={dict} />
      </div>

      <div
        className={
          'w-full relative flex sm:py[40px] items-center py-[60px] px-[100px] md:px-4 sm:px-4 z-20'
        }
      >
        <img
          src="/c-left.png"
          alt="c-left-2"
          className={'absolute z-10 bottom-0 left-0 md:hidden sm:hidden'}
        />

        <img
          src="/c-right.png"
          alt="c-right-2"
          className={'absolute z-10 top-0 right-0 md:hidden sm:hidden'}
        />

        <Buildings dict={dict} />
      </div>
    </div>
  );
};

export default ConstructionProgress;
