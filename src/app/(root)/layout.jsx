import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import '../embla.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
