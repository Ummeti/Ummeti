import React from 'react';
import { RemoveIcon } from './Icons';

export default function Items() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-3xl font-bold font-manrope leading-normal">
              Projects
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-center gap-8 flex">
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <div className="w-full flex-col justify-start items-start gap-5 inline-flex border border-gray-200 rounded-2xl lg:p-5 p-4">
                <ul className="w-full px-6 pb-4 border-b border-gray-200 justify-start items-center md:gap-8 gap-0 md:grid grid-cols-12 hidden">
                  <li className="lg:col-span-4 md:col-span-5 col-span-12 text-gray-900 text-xl font-medium leading-8">
                    Project
                  </li>
                  <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center gap-8 flex">
                    <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                      Raised amount
                    </li>
                    <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                      Goal
                    </li>
                    <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8"></li>
                  </div>
                </ul>
                <div className="w-full flex flex-col gap-5">
                  <div className="grid grid-cols-12 w-full px-6 pb-5 justify-start items-center md:gap-8 gap-3 border-b border-gray-300">
                    <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 md:pb-5 flex md:flex-row flex-col">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1715681934.png"
                        alt="Story Book image"
                      />
                      <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Adventure Story Book
                        </h4>
                        <h6 className="text-gray-500 text-base font-normal leading-7">
                          Drama, Adventure...
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                      <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-500 text-lg font-medium leading-8">
                        1000
                      </h5>
                      <input
                        type="text"
                        className="md:col-span-2 col-span-12 w-full focus:outline-none text-center text-gray-900 placeholder-gray-500 text-lg font-medium leading-8"
                        placeholder="20000"
                      />
                      <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-medium leading-8">
                        <RemoveIcon />
                      </h5>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 w-full px-6 pb-5 justify-start items-center md:gap-8 gap-3">
                    <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 flex md:flex-row flex-col">
                      <img
                        className="object-cover"
                        src="https://pagedone.io/asset/uploads/1715681946.png"
                        alt="Travelling Backpack image"
                      />
                      <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                        <h4 className="text-gray-900 text-xl font-medium leading-8">
                          Travelling Backpack
                        </h4>
                        <h6 className="text-gray-500 text-base font-normal leading-7">
                          Leather Material...
                        </h6>
                      </div>
                    </div>
                    <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                      <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-500 text-lg font-medium leading-8">
                        6000
                      </h5>
                      <input
                        type="text"
                        className="md:col-span-2 col-span-12 w-full focus:outline-none text-center text-gray-900 placeholder-gray-500 text-lg font-medium leading-8"
                        placeholder="50000"
                      />
                      <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-medium leading-8">
                        <RemoveIcon />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:p-5 p-4 rounded-2xl border border-gray-200 flex-col justify-start items-start gap-5 flex">
                <div className="w-full px-5 pb-6 border-b border-gray-200 flex-col justify-start items-start gap-6 flex">
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-8">
                      Subtotal
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $172.00
                    </h5>
                  </div>
                  <div className="w-full justify-between items-start gap-6 inline-flex">
                    <h5 className="text-gray-500 text-lg font-normal leading-8">
                      Shipping
                    </h5>
                    <h5 className="text-right text-gray-900 text-lg font-semibold leading-8">
                      $20.00
                    </h5>
                  </div>
                </div>
                <div className="px-5 pb-6 border-b border-gray-100 w-full justify-between items-start gap-6 inline-flex">
                  <h5 className="text-indigo-600 text-xl font-semibold leading-8">
                    Total
                  </h5>
                  <h5 className="text-right text-indigo-600 text-xl font-semibold leading-8">
                    $192.00
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full justify-end items-center gap-5 flex sm:flex-row flex-col">
              <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                  View Order Details
                </span>
              </button>
              <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Track My Order
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
