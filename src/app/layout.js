import localFont from '@next/font/local';
import Head from 'next/head';
import FaviHref from './../../public/icon.ico';
import FaviAppleHref from './../../public/apple-touch-icon.png';

export const metadata = {
  title: 'Beemo Software Services',
  description: 'Solving Solutions with Software',
};

const SourceCodePro = localFont({
  src: [{ path: '../../public/fonts/SourceCodePro-VariableFont_wght.ttf' }],
  variable: '--font-SourceCodePro',
});

const outfit = localFont({
  src: [
    {
      path: '../../public/fonts//OutfitRegular.ttf',
      weight: '500',
      style: 'regular',
    },
    {
      path: '../../public/fonts//OutfitBold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/OutfitBlack.ttf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-Outfit',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${SourceCodePro.variable} ${outfit.variable} font-sans`}
    >
      <Head>
        <link rel="icon" href={FaviHref} sizes="any" />
        <link
          rel="apple-touch-icon"
          href={FaviAppleHref}
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
