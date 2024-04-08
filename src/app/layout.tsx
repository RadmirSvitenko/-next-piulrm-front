import './globals.css';
import Header from '../components/header/Component';
import Footer from '../components/footer/Component';
import { Comfortaa, Montserrat, Inter } from 'next/font/google';

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const fontClasses = [comfortaa.className].join(' ');
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={fontClasses}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        style={{ fontFamily: `${comfortaa}` }}
        className="max-w-[1920px] mx-auto"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
