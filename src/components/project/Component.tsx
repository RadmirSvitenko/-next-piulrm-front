'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { API } from '../../requester';
import { Skeleton } from '@mui/material';

const Project = () => {
  const [projects, setProjects]: any = useState([]);

  const handleGetProjects = useCallback(async () => {
    const response = await API.get('/projects/');
    const data = response.data.results;
    setProjects(data);
  }, []);

  useEffect(() => {
    handleGetProjects();
  }, [handleGetProjects]);

  return (
    <div
      className={
        'w-full z-10 min-h-screen flex flex-col py-[54px] px-[79px] gap-[54px] sm:gap-5 bg-[#E5F0FA] sm:bg-[#E5F0FA] relative flex-wrap box-border sm:p-6'
      }
    >
      <img
        src="/c-left.png"
        alt="c-left-avsc"
        className={'sm:hidden absolute z-0 left-0 top-[10%] h-[412px]'}
      />
      <img
        src="/c-right.png"
        alt="c-left-avsc"
        className={'sm:hidden absolute z-0 right-0 top-[15%] h-[412px]'}
      />
      {!projects ||
        (projects === 'undefined' ? (
          <div
            className={
              'w-full z-10 sm:p-0 flex flex-col py-[54px] px-[79px] gap-[54px] sm:gap-3 relative flex-wrap box-border'
            }
          >
            <Skeleton width={'100%'} height={'100vh'} />
          </div>
        ) : (
          projects.map((project: any) => (
            <div
              key={project.id}
              className={
                'w-full z-10 flex rounded-xl flex-col sm:gap-7 gap-[32px] bg-white p-5'
              }
            >
              <p className={' z-10 text-[22px] font-[700] text-[#128DFF]'}>
                {project?.name}
              </p>

              <span
                className={
                  'text-justify break-all sm:text-start z-10 text-comfortaa text-[17px] text-[#1A1A1A] tracking-widest font-[400]'
                }
              >
                {project?.description}
              </span>
              <div
                className={`flex z-10 flex-wrap md:flex-col md:items-center sm:flex-col
                  ${
                    project?.photos?.length <= 2
                      ? 'justify-start'
                      : 'justify-between'
                  }  w-full sm:gap-3 gap-10`}
              >
                {project?.photos?.map((photoData: any) => (
                  <img
                    key={photoData?.id}
                    src={photoData?.image || 'no-image.png'}
                    alt={photoData?.caption}
                    className={
                      'w-[300px] sm:w-full sm:h-auto h-[212px] rounded-lg'
                    }
                  />
                ))}
              </div>

              <div
                className={
                  'flex z-10 justify-between md:flex-wrap flex-wrap md:flex-col sm:flex-col w-full sm:gap-5 gap-10'
                }
              >
                {project?.documents?.map((document: any) => (
                  <div
                    key={document.id}
                    className={
                      'flex gap-5 items-center py-3 px-4 justify-between border-[1px] border-[#DEE2E6] rounded-md'
                    }
                  >
                    <div className={'flex gap-2'}>
                      <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#0B4678] rounded-[4px]">
                        <span className="text-[#fff]">
                          {document?.file.split('.').pop()}
                        </span>
                      </div>

                      <div className={'flex flex-col gap-[10px] w-[150px]'}>
                        <span
                          className={
                            'truncate overflow-ellipsis font-[700] text-[12px] text-[#98A6AD]'
                          }
                        >
                          {document?.description}
                        </span>

                        <span
                          className={' font-[700] text-[12px] text-[#98A6AD]'}
                        >
                          {document?.created_at}
                        </span>
                      </div>
                    </div>
                    <a href={document?.file} download={document?.description}>
                      <img
                        src="/download-icon.svg"
                        alt={document?.description}
                        className={'w-[24px] h-[24px]'}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))
        ))}
    </div>
  );
};

export default Project;
