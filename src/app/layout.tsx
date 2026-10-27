import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '../context/AppContext';

export const metadata: Metadata = {
  title: 'Learnix | منصة تعليم اللغات التفاعلية والذكية',
  description: 'منصة Learnix لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased font-sans">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
