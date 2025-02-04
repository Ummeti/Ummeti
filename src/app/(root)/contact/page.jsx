import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="#" className="space-y-4">
          <div className="">
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-main"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-main"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-main"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">
            <div>
              <label
                htmlFor="Option1"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-main has-[:checked]:border-main has-[:checked]:bg-main has-[:checked]:text-white"
                tabIndex="0"
              >
                <input
                  className="sr-only"
                  id="Option1"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <span className="text-sm">$10</span>
              </label>
            </div>

            <div>
              <label
                htmlFor="Option2"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-main has-[:checked]:border-main has-[:checked]:bg-main has-[:checked]:text-white"
                tabIndex="0"
              >
                <input
                  className="sr-only"
                  id="Option2"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <span className="text-sm">$25</span>
              </label>
            </div>

            <div>
              <label
                htmlFor="Option3"
                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-main has-[:checked]:border-main has-[:checked]:bg-main has-[:checked]:text-white"
                tabIndex="0"
              >
                <input
                  className="sr-only"
                  id="Option3"
                  type="radio"
                  tabIndex="-1"
                  name="option"
                />

                <span className="text-sm">$50</span>
              </label>
            </div>
            <div>
              <input
                className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-main focus:outline-main"
                id="custom"
                type="text"
                tabIndex="-1"
                name="custom"
                placeholder="CUSTOM AMOUNT"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-main"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-main px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
