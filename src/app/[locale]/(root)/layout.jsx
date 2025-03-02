import { Geist, Geist_Mono } from 'next/font/google';
import '../../globals.css';
import '../../embla.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ummati Foundation – Zakat & Sadaqah Fundraising for Those in Need',
  description:
    'Ummati Foundation is a trusted Islamic nonprofit dedicated to collecting Zakat, Sadaqah, and donations to support the poor, orphans, and those in crisis. Join us in fulfilling your Islamic duty through charity, humanitarian aid, and sustainable relief projects worldwide. Donate today!',
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="scroll-smooth"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
