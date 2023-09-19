import localFont from 'next/font/local';

// import './fonts/PlusJakartaSans-Bold.tff';
export const metadata = {
  title: 'Beemo Software Services',
  description: 'Solving Soltuions with Software',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
