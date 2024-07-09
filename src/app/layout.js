import Head from 'next/head';
import FaviHref from './../../public/icon.ico';
import FaviAppleHref from './../../public/apple-touch-icon.png';

export const metadata = {
  title: 'Ibrahims Portfolio',
  description: 'Solving Solutions with Software',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/SourceCodePro-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-VariableFont_wght.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
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
