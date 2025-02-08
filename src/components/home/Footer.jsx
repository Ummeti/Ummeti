import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Socials from '../widgets/Socials';
import ContactInfo from '../widgets/ContactInfo';

export default function Footer2() {
  return (
    <footer className="bg-main">
      <div className="px-4 sm:px-6 md:px-8 pt-16 pb-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="flex justify-center text-white sm:justify-start"
            >
              <Image src="/logo-2.webp" alt="Ummati" width={100} height={100} />
            </Link>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-100 sm:max-w-xs sm:text-left">
              Ummati is a global organization aimed at supporting the issues of
              the Islamic nation and advocating for the Palestinian cause.
            </p>
            <Socials color="text-white" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Agency
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/#volunteer"
                  >
                    Volenteer Now
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Story
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Resources</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Donors
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Community
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="#"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ContactInfo color="text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-4">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <div className="text-sm text-gray-100">
              <span className="block sm:inline">All rights reserved. </span>

              <Link
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                Terms & Conditions
              </Link>

              <span> &middot; </span>

              <Link
                className="inline-block text-white underline transition hover:text-white/75"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} Tw9str
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
