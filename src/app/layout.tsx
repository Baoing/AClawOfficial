import SmoothScrollProvider from '@/src/components/animation/smooth-scroll';
import { LocaleProvider } from '@/src/context/LocaleContext';
import Footer from '@/src/components/shared/layout/footer/footer';
import Navbar from '@/src/components/shared/layout/navbar/navbar';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { fontVariables } from '@/src/utils/font';
import type { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        <Suspense>
          <LocaleProvider>
            <SmoothScrollProvider>
              <Navbar />
              <main className="bg-background-6">{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </LocaleProvider>
        </Suspense>
      </body>
    </html>
  );
}
