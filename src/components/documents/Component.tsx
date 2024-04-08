'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';

const Documents: React.FC = () => {
  const [documents, setDocuments]: any = useState([]);

  const handleGetDocuments = useCallback(async () => {
    const response = await API.get('documents/');
    const data = response.data.results;
    setDocuments(data);
  }, []);

  useEffect(() => {
    handleGetDocuments();
  }, [handleGetDocuments]);
  return (
    <div
      className={
        'w-full h-auto justify-evenly flex px-[100px] sm:px-4 sm:justify-center pt-[54px] pb-[64px] sm:py-[40px] bg-[#E5F0FA] relative'
      }
    >
      <img
        src="/c-left-doc.svg"
        alt="c-left"
        className={'absolute left-0 top-[30%] z-0 sm:hidden'}
      />
      <img
        src="/c-right-doc.svg"
        alt="c-right"
        className={'absolute right-0 top-[20%] z-0 sm:hidden'}
      />
      <div
        className={
          'flex z-10 gap-[40px] sm:flex justify-evenly sm:justify-center sm:flex-col flex-wrap'
        }
      >
        {documents?.map((document: any) => (
          <a
            href={document?.file}
            download={document?.description}
            key={document.id}
          >
            <div
              className={
                'flex flex-col px-4 gap-8 w-[300px] h-[340px] items-start bg-[#FCFCFD]'
              }
            >
              {/* <img
                src="/document-preview.png"
                alt="test"
                className={'sm:w-full z-10 h-[210px]'}
              /> */}

              <iframe
                src={document?.file}
                className={'sm:w-full z-10 h-[210px]'}
              ></iframe>

              <div className={'flex w-full items-start justify-between'}>
                <div className={'flex flex-col gap-[10px]'}>
                  <span
                    className={
                      'font-inter font-[600] w-64 truncate overflow-ellipsis text-[18px] text-[#282828]'
                    }
                  >
                    {document?.description}
                  </span>
                  <span
                    className={
                      'font-inter font-[400] text-[14px] text-[#5F6980]'
                    }
                  >
                    {document?.created_at}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Documents;
