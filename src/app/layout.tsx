import SmoothScrollProvider from '@/src/components/animation/smooth-scroll';
import { LocaleProvider } from '@/src/context/LocaleContext';
import Footer from '@/src/components/shared/layout/footer/footer';
import Navbar from '@/src/components/shared/layout/navbar/navbar';
import { defaultMetadata } from '@/src/utils/generateMetaData';
import { fontVariables } from '@/src/utils/font';
import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script id="tawk-to" strategy="afterInteractive">
          {`
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/69f019ac3aaa4c1c3adc0dce/1jn8u8j7g';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
          `}
        </Script>
      </body>
    </html>
  );
}
