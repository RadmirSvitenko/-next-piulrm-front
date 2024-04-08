'use client';

import { Close } from '@mui/icons-material';
import { IconButton, SwipeableDrawer } from '@mui/material';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getDictionary } from '../../app/dictionaries';

const ModalHeader: React.FC<ModalHeaderProps> = ({
  open,
  onClose,
  language,
  setLanguage,
}) => {
  const [dict, setDict]: any = useState();

  const path = usePathname();
  const { lang }: any = useParams();
  const router = useRouter();

  const handleGetLanguage = () => {
    const dict = getDictionary(language);
    setDict(dict);
  };

  const handleChangeLanguage = async (value: string) => {
    setLanguage(value);
    await getDictionary(language);
  };

  const modalHeaderTabs: HeaderTabs[] = [
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

  const languages: Languages[] = [
    { lang: 'KG', value: 'kg' },
    { lang: 'RU', value: 'ru' },
    { lang: 'EN', value: 'en' },
  ];

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    handleGetLanguage();
    const trimmedPath = path.substring(3);
    router.push(`/${language}${trimmedPath}`);
  }, [language]);

  useEffect(() => {
    setLanguage(lang);
  }, []);

  return (
    <SwipeableDrawer
      transitionDuration={700}
      anchor={'left'}
      open={open}
      onClose={onClose}
      onOpen={() => open}
      variant="persistent"
      sx={{
        width: '100%',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '100%',
          boxSizing: 'border-box',
        },
      }}
    >
      <div
        className={'w-full h-screen flex flex-col items-center justify-around'}
      >
        <div className={'flex w-full justify-between gap-10 px-4'}>
          <div className={'flex gap-[13px]'}>
            <img
              src={'/header-icon-1.svg'}
              alt="header-icon-1"
              className={'w-[44px] sm:w-[44px]'}
            />

            <img
              src={'/header-icon-3.svg'}
              alt="header-icon-3"
              className={'w-[44px] sm:w-[44px]'}
            />

            <img
              src={'/header-icon-2-v2.svg'}
              alt="header-icon-2"
              className={'w-[44px] sm:w-[73px]'}
            />
          </div>

          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </div>

        <div
          className={
            'flex flex-col gap-[24px] justify-evenly items-center flex-wrap'
          }
        >
          {modalHeaderTabs?.map(
            ({ name, url }: { name: string; url: string }, index: number) => (
              <a
                href={url}
                onClick={() => onClose()}
                className={`text-[11px] font-[600] space-x-1 cursor-pointer hover:text-[#0162D3] transition delay-150 tracking-wide ${
                  path === url ? 'text-[#0162D3]' : 'text-[#969CA3]'
                }`}
                key={index}
              >
                {name}
              </a>
            )
          )}
        </div>

        <div className={'flex gap-[24px]'}>
          {languages.map(({ lang, value }: any) => (
            <p
              className={`text-[18px] tracking-[0.2px] ${
                value === language
                  ? 'text-[#0162D3] font-[700] hover:cursor-pointer hover:text-[#0162D3]'
                  : 'text-[#969CA3] font-[300] cursor-pointer'
              }`}
              key={lang}
              onClick={() => handleChangeLanguage(value)}
            >
              {lang}
            </p>
          ))}
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default ModalHeader;
