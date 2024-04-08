'use client';

import SearchField from '../searchField/Component';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ModalHeader from '../modalHeader/ModalHeader';
import Link from 'next/link';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { DragHandle } from '@mui/icons-material';
import { getDictionary } from '../../app/dictionaries';

const Header: React.FC = () => {
  const path = usePathname();
  const router = useRouter();

  const { lang, id, value } = useParams();

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [language, setLanguage] = useState('ru');
  const [dict, setDict]: any = useState('ru');
  const [modalHeader, setModalHeader] = useState(false);

  let headerPreview;
  let headerName;

  if (path === `/${lang}` || path === '/') {
    (headerPreview = `/header-main.png`),
      (headerName = dict?.headerTitles?.main);
  }
  if (path === `/${lang}/projects`) {
    (headerPreview = `/header-about-project.png`),
      (headerName = dict?.headerTitles?.aboutProject);
  }
  if (path === `/${lang}/construction-progress`) {
    (headerPreview = `/header-construction-progress.png`),
      (headerName = dict?.headerTitles?.constructionProgress);
  }
  if (path === `/${lang}/documents`) {
    (headerPreview = `/header-documents.png`),
      (headerName = dict?.headerTitles?.documents);
  }
  if (path === `/${lang}/tenders`) {
    (headerPreview = `/header-tenders.png`),
      (headerName = dict?.headerTitles?.tenders);
  }

  if (path === `/${lang}/tenders/${id}`) {
    (headerPreview = `/header-tenders.png`),
      (headerName = dict?.headerTitles?.tender);
  }
  if (path === `/${lang}/tenders/${id}/results`) {
    (headerPreview = `/header-tenders.png`),
      (headerName = dict?.headerTitles?.tenterItog);
  }
  if (path === `/${lang}/news`) {
    (headerPreview = `/header-news.png`),
      (headerName = dict?.headerTitles?.news);
  }
  if (path === `/${lang}/news/${id}`) {
    (headerPreview = `/header-about-news.png`),
      (headerName = dict?.headerTitles?.news);
  }
  if (path === `/${lang}/gallary`) {
    (headerPreview = `/header-gallary.png`),
      (headerName = dict?.headerTitles?.gallery);
  }
  if (path === `/${lang}/contacts`) {
    (headerPreview = `/header-contacts.png`),
      (headerName = dict?.headerTitles?.contacts);
  }
  if (path === `/${lang}/feedback`) {
    (headerPreview = `/header-feedback.png`),
      (headerName = dict?.headerTitles?.feedback);
  }
  if (path === `/${lang}/site-map`) {
    (headerPreview = `/header-site-map.png`),
      (headerName = dict?.headerTitles?.siteMap);
  }

  if (path === `/${lang}/search/${value}`) {
    (headerPreview = `/search-result-bg.png`),
      (headerName = dict?.headerTitles?.searchResults);
  }

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

  const languages: Languages[] = [
    { lang: 'KG', value: 'kg' },
    { lang: 'RU', value: 'ru' },
    { lang: 'EN', value: 'en' },
  ];

  const handleChangeLanguage = (value: string) => {
    setLanguage(value);
    getDictionary(language);
  };

  const toggleModalHeader = (value: boolean) => {
    setModalHeader(value);
  };

  const handleGetLanguage = () => {
    const dict = getDictionary(language);
    setDict(dict);
  };

  useEffect(() => {
    handleGetLanguage();
    const trimmedPath = path.substring(3);
    router.push(`/${language}${trimmedPath}`);
  }, [language, dict]);

  return (
    <div>
      <div
        className={
          'w-full min-h-[310px] sm:px-4 md:px-4 justify-center items-center flex relative'
        }
        style={{
          backgroundImage: `url(${headerPreview})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={
            'flex justify-between absolute gap-4 top-0 left-0 pt-5 pl-20  sm:pt-[5.5px] sm:pl-[16px]'
          }
        >
          <img
            src={'/header-icon-1.svg'}
            alt="header-icon-1"
            className={'w-[50px] sm:w-[44px]'}
          />

          <img
            src={'/header-icon-3.svg'}
            alt="header-icon-3"
            className={'w-[50px] sm:w-[44px]'}
          />

          <img
            src={'/header-icon-2.svg'}
            alt="header-icon-2"
            className={'w-[82px] sm:w-[73px]'}
          />
        </div>

        <IconButton
          onClick={() => toggleModalHeader(true)}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 999,
            display: isSmScreen ? 'inline-block' : 'none',
          }}
        >
          <DragHandle
            sx={{
              width: '32px',
              height: '32px',
              color: '#FFF',
            }}
          />
        </IconButton>

        <span
          className={
            'text-white font-light font-montserratOpenSans tracking-[-1px] text-[43px] sm:text-[28px] md:text[28px] text-center sm:text-wrap'
          }
        >
          {headerName}
        </span>
      </div>

      <div
        className={
          'flex justify-evenly md:flex md:flex-wrap items-center w-full md:py-4 h-auto lg:px-20 md:px-20 min-h-[70px] sm:m-0 px-5'
        }
      >
        <header
          className={
            'w-full h-full flex-wrap md:flex-col gap-4 flex sm:hidden justify-evenly items-center bg-white'
          }
        >
          {headerTabs?.map(
            ({ name, url }: { name: string; url: string }, index: number) => (
              <Link
                href={url}
                className={`text-[11px] ${
                  path === url ? 'font-[600]' : 'font-[300]'
                }  space-x-1 cursor-pointer hover:text-[#0162D3] transition delay-150 tracking-wide ${
                  path === url ? 'text-[#0162D3]' : 'text-[#A6AEB6]'
                }`}
                key={index}
              >
                {name}
              </Link>
            )
          )}
        </header>

        <SearchField dict={dict} />

        <div
          className={'sm:hidden border-[1px] border-[#C6CBD0] h-[19px] mx-4'}
        />

        <div className="sm:hidden">
          {languages.map(({ lang, value }) => (
            <p
              className={`text-[14px] text-montserrat font-[600] ${
                value === language
                  ? 'text-[#0162D3] border-l-1'
                  : 'text-[#000] cursor-pointer'
              }`}
              key={lang}
              onClick={() => handleChangeLanguage(value)}
            >
              {lang}
            </p>
          ))}
        </div>
      </div>

      <ModalHeader
        open={modalHeader}
        onClose={() => toggleModalHeader(false)}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
};

export default Header;
