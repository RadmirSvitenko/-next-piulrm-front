'use client';

import Image from 'next/image';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '../../app/dictionaries';

const Footer = () => {
  const [dict, setDict]: any = useState();

  const path = usePathname();
  const { lang }: any = useParams();

  const handleGetLanguage = () => {
    const dict = getDictionary(lang);
    setDict(dict);
  };

  useEffect(() => {
    handleGetLanguage();
  }, [lang]);

  const footerTabs: HeaderTabs[] = [
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
    <div
      className={
        'w-12/12 h-44.5 px-20 sm:px-[40px] min-h-[180px] py-6 bg-white flex-col flex-wrap justify-between flex z-20'
      }
    >
      <div
        className={
          'w-full flex justify-between items-center pt-6 pb-4 sm:flex-col sm:flex-wrap z-10'
        }
      >
        <div className={'flex gap-5 sm:justify-center pr-5 items-center z-20'}>
          <img
            src={'/header-icon-1.svg'}
            alt="header-icon-1"
            className={'w-[50px] sm:w-[44px] z-[100]'}
          />

          <img
            src={'/header-icon-3.svg'}
            alt="header-icon-3"
            className={'w-[50px] sm:w-[44px] z-20'}
          />

          <img
            src={'/footer-icon-2.svg'}
            alt="header-icon-2"
            className={'w-[82px] sm:w-[73px] z-20'}
          />
        </div>

        <div
          className={
            'flex justify-end flex-wrap md:flex-col items-center gap-4 sm:flex-col sm:flex-wrap sm:justify-center sm:items-center sm:pt-10 sm:pb-[8px] z-10'
          }
        >
          {footerTabs?.map(
            ({ name, url }: { name: string; url: string }, index: number) => (
              <a
                href={url}
                className={`space-x-1 font-light text-[11px]
                ${path === url ? 'font-[600]' : 'font-[300]'} 
                ${path === url ? 'text-[#0162D3]' : 'text-[#A6AEB6]'}
                 cursor-pointer hover:text-[#0162D3] transition delay-150 tracking-wide active:text-[#0162D3]`}
                key={index}
              >
                {name}
              </a>
            )
          )}
        </div>
      </div>

      <hr className={'bg[#ABAFC7] h-0.25 sm:hidden z-10 opacity-[0.5]'} />

      <div
        className={
          'flex w-full justify-between items-center sm:flex-col-reverse sm:flex-wrap'
        }
      >
        <span
          className={`lg:font-montserrat text-[#A6AEB6] lg:block md:block sm:hidden z-10`}
        >
          {dict?.footer?.designTitle}
        </span>
        <div className={'flex gap-8 sm:w-full sm:justify-evenly sm:p-[24px]'}>
          <Image
            src="/footer-insta.svg"
            alt="instagram"
            width={26}
            height={26}
          />

          <Image src="/footer-in.svg" alt="instagram" width={26} height={26} />

          <Image
            src="/footer-facebook.svg"
            alt="facebook"
            width={26}
            height={26}
          />

          <Image
            src="/footer-twitter.svg"
            alt="twitter"
            width={26}
            height={26}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
