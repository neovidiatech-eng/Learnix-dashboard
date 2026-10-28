// import type { Metadata } from "next";
// import "./globals.css";
// import { AppProvider } from "../context/AppContext";

import { AppProvider } from "@/context/AppContext";
import { Metadata, Viewport } from "next";

// export const metadata: Metadata = {
//   title: "Learnex | منصة تعليم اللغات التفاعلية والذكية",
//   description:
//     "منصة Learnex لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)",
//   icons: {
//     icon: "/logo.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="ar" dir="rtl">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="bg-white text-slate-800 antialiased font-sans">
//         <AppProvider>{children}</AppProvider>
//       </body>
//     </html>
//   );
// }


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://Learnex.vercel.app';
export const viewport: Viewport = {
  themeColor: '#4f46e5',
  width: 'device-width',
  initialScale: 1,
};
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Learnex | منصة التعلّم وتطوير المهارات',
    template: '%s | Learnex',
  },
  description: 'منصة Learnex تقدم حلولاً تدريبية وتعليمية تفاعلية لتطوير المهارات التقنية والمهنية.',
  keywords: [
    'Learnex',
    'تعليم إلكتروني',
    'كورسات أونلاين',
    'تطوير مهارات',
    'برمجة',
    'دورات تدريبية',
    'منصة تعليمية',
    'Learnex',
  ],
  authors: [{ name: 'Neovidia Tech', url: siteUrl }],
  creator: 'Neovidia Tech',
  publisher: 'Learnex',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: ['en_US'],
    url: siteUrl,
    title: 'Learnex | منصة التعلّم وتطوير المهارات',
    description: 'منصة Learnex تقدم حلولاً تدريبية وتعليمية تفاعلية لتطوير المهارات التقنية والمهنية.',
    siteName: 'Learnex',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Learnex Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnex | منصة التعلّم وتطوير المهارات',
    description: 'منصة Learnex تقدم حلولاً تدريبية وتعليمية تفاعلية لتطوير المهارات التقنية والمهنية.',
    images: ['/og-image.jpg'],
    creator: '@Learnex',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Learnex',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: 'منصة Learnex للتعليم والتطوير المهني والتقني.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}