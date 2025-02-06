import Breadcrumb from '@/components/widgets/Breadcrumb';
import ContactInfo from '@/components/widgets/ContactInfo';
import Socials from '@/components/widgets/Socials';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Contact() {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl">
      <Breadcrumb />
      <div className="flex flex-col items-center text-gray-900 rounded-lg py-16 px-6 md:px-20 mt-4">
        <div className="max-w-2xl text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="bg-gray-100 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 mb-2">Your email</label>
                <input
                  type="email"
                  placeholder="name@domain.com"
                  className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+90..."
                  className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Your message</label>
              <textarea
                placeholder="Leave a comment..."
                className="w-full p-3 bg-gray-50 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-main h-32"
              ></textarea>
            </div>
            <p className="text-gray-500 text-sm">
              By submitting this form you agree to our{' '}
              <Link href="#" className="text-main">
                terms and conditions{' '}
              </Link>
              and our{' '}
              <Link href="#" className="text-main">
                privacy policy
              </Link>
              .
            </p>
            <button
              type="submit"
              className="w-full bg-main text-white py-3 rounded-lg font-bold hover:bg-main-light transition"
            >
              Send message
            </button>
          </form>
        </div>
        <ContactInfo color="text-gray-900" />
        <Socials color="text-gray-900" />
      </div>
    </section>
  );
}
