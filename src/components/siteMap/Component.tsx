'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const SiteMap: React.FC = ({ dict }: any) => {
  const { lang } = useParams();

  const headerTabs: HeaderTabs[] = [
    { name: dict?.header?.main, url: `/${lang}` },
    { name: dict?.header?.aboutProject, url: `/${lang}/projects` },
    {
      name: dict?.header?.constructionProgress,
      url: `/${lang}/construction-progress`,
    },
    {
      name: dict?.header?.documents,
      url: `/${lang}/documents`,
    },
    { name: dict?.header?.tenders, url: `/${lang}/tenders` },
    { name: dict?.header?.news, url: `/${lang}/news` },
    { name: dict?.header?.gallery, url: `/${lang}/gallary` },
    { name: dict?.header?.contacts, url: `/${lang}/contacts` },
    {
      name: dict?.header?.feedback,
      url: `/${lang}/feedback`,
    },
    {
      name: dict?.header?.siteMap,
      url: `/${lang}/site-map`,
    },
  ];

  return (
    <div className="w-full flex md:flex-col md:items-center md:text-center sm:flex-col sm:items-center pt-[32px] px-[100px] pb-[64px] sm:gap-7 gap-8 justify-evenly flex-wrap sm:py-4 sm:px-5 bg-[#F0F7FF]">
      <ol>
        {headerTabs?.map(
          ({ name, url }: { name: string; url: string }, index: number) => (
            <li key={index} className={'text-[#4383FF] hover:underline py-2'}>
              <a
                href={url}
                className={`text-[14px]  font-[700] space-x-1  cursor-pointer hover:text-[#0162D3] transition delay-150 tracking-wide`}
              >
                {name}
              </a>
            </li>
          )
        )}
      </ol>
    </div>
  );
};

export default SiteMap;
