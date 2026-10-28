import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://Learnex.vercel.app";

export const viewport: Viewport = {
  themeColor: "#163f5f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Learnex | منصة تعليم اللغات التفاعلية والذكية",
    template: "%s | Learnex",
  },
  description:
    "منصة Learnex لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)",
  keywords: [
    "Learnex",
    "تعليم اللغات",
    "تعليم إلكتروني",
    "كورسات أونلاين",
    "تطوير مهارات",
    "تعلم الإنجليزية",
    "WebRTC",
    "اختبار تحديد مستوى",
    "CEFR",
    "منصة تعليمية",
  ],
  authors: [{ name: "Neovidia Tech", url: siteUrl }],
  creator: "Neovidia Tech",
  publisher: "Learnex",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: siteUrl,
    title: "Learnex | منصة تعليم اللغات التفاعلية والذكية",
    description:
      "منصة Learnex لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)",
    siteName: "Learnex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learnex Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnex | منصة تعليم اللغات التفاعلية والذكية",
    description:
      "منصة Learnex لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)",
    images: ["/og-image.jpg"],
    creator: "@Learnex",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Learnex",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "منصة Learnex لتعليم اللغات بتقنيات تفاعلية، فصول حية WebRTC، واختبار تحديد مستوى مجاني معتمد دولياً (CEFR)",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased font-sans">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
