import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Socials from '../widgets/Socials';
import ContactInfo from '../widgets/ContactInfo';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-main">
      <div className="px-4 sm:px-6 md:px-8 pt-16 mt-20 pb-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex justify-center text-white sm:justify-start"
            >
              <Image src="/logo-2.webp" alt="Ummati" width={100} height={100} />
            </Link>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
              {t('Description')}
            </p>
            <Socials color="text-white" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t('AboutUs')}</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/#volunteer"
                  >
                    {t('AboutUsItems.VolunteerNow')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    {t('AboutUsItems.Story')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/projects"
                  >
                    {t('AboutUsItems.Projects')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t('Resources')}</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    {t('ResourcesItems.Donors')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    {t('ResourcesItems.Community')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    {t('ResourcesItems.Events')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">
                {t('HelpfulLinks')}
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    {t('HelpfulLinksItems.FAQs')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/contact"
                  >
                    {t('HelpfulLinksItems.Contact')}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/projects"
                  >
                    {t('HelpfulLinksItems.Projects')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">{t('ContactUs')}</p>
              <ContactInfo color="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-4">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <div className="text-sm text-gray-100">
              <span className="block sm:inline">
                {t('Legal.AllRightsReserved')}{' '}
              </span>
              <Link
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                {t('Legal.TermsAndConditions')}
              </Link>
              <span> · </span>
              <Link
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                {t('Legal.PrivacyPolicy')}
              </Link>
            </div>
            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              © {new Date().getFullYear()} Tw9str
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
