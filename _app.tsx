// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { AppProps } from 'next/app';

// function MyApp({ Component, pageProps }: AppProps) {
//   const router = useRouter();

//   useEffect(() => {
//     const language = router.locale || 'ru';
//     console.log('language: ', language);

//     if (!router.pathname.startsWith(`/${language}`)) {
//       router.push(`/${language}${router.pathname}`);
//     }
//   }, []);

//   return <Component {...pageProps} />;
// }

// export default MyApp;
