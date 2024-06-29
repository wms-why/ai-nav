import Footer from '@/components/home/Footer';
import Script from 'next/script';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className='mx-auto flex w-full flex-1'>{children}</main>
      <Footer />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EVP5RGLCG4" strategy="afterInteractive"></Script>
      <Script strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-EVP5RGLCG4');
        `}
      </Script>
    </>
  );
}
