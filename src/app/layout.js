import localFont from '@next/font/local';
import Head from 'next/head';
export const metadata = {
  title: 'Beemo Software Services',
  description: 'Solving Solutions with Software',
};

const SourceCodePro = localFont({
  src: [{ path: '../../public/fonts/SourceCodePro-VariableFont_wght.ttf' }],
  variable: '--font-SourceCodePro',
});

const outfit = localFont({
  src: [{ path: '../../public/fonts/Outfit-VariableFont_wght.ttf' }],
  variable: '--font-Outfit',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${SourceCodePro.variable} ${outfit.variable} font-sans`}
    >
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
