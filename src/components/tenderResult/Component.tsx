'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';
import { useParams, useRouter } from 'next/navigation';
import { ArrowBack } from '@mui/icons-material';

const Tender: React.FC = ({ dict }: any) => {
  const [tenderResult, setTenderResult]: any = useState();

  const { lang, id } = useParams();
  const router = useRouter();

  const handleGetTenderResult = useCallback(async () => {
    const response = await API.get(`tenders/${id}/results`);
    const data = response.data;
    setTenderResult(data);
  }, []);

  const toTenders = () => {
    router.push(`/${lang}/tenders`);
  };

  useEffect(() => {
    handleGetTenderResult();
  }, [handleGetTenderResult]);

  return (
    <div
      className={
        'flex justify-center items-center pt-[20px] px-[100px] pb-[64px] sm:px-[16px] sm:pb-[60px] sm:pt-[20px] h-auto min-h-screen'
      }
    >
      <div className={'flex w-full flex-col flex-wrap gap-8'}>
        <div
          className={
            'flex justify-start gap-2 sm:gap-5 items-center w-full sm:px-[16px]'
          }
        >
          <div
            className={
              'flex w-full justify-start items-center gap-2 hover:cursor-pointer py-1 px-2 rounded hover:bg-[#F5F5F5] hover:transition-[0.7s] transition-[0.7s]'
            }
            onClick={() => toTenders()}
          >
            <ArrowBack
              sx={{ width: '20px', height: '20px', color: '#1A1A1A' }}
            />
            <span className={'text-[#1A1A1A]  font-[700] text-[18px]'}>
              {dict?.back}
            </span>
          </div>
        </div>

        {tenderResult && tenderResult.length > 0 ? (
          tenderResult?.map((result: any, index: number) => (
            <div
              key={index}
              className={
                'flex w-full justify-between items-start pt-[20px] pb-[64px] sm:px-[16px] sm:pb-[60px] bg-[#fff] text-[#1A1A1A] flex-wrap sm:pt-[20px] h-auto min-h-screen'
              }
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: result?.result_description,
                }}
              />
            </div>
          ))
        ) : (
          <div
            className={
              'flex w-full h-screen justify-center items-center sm:items-start pt-[20px]  sm:px-[16px] sm:pb-[60px] bg-[#fff] text-[#1A1A1A] flex-wrap sm:pt-[20px]'
            }
          >
            <h3 className={'text-[#1A1A1A]  font-[700] text-[30px]'}>
              Итоги пока не определены.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tender;
