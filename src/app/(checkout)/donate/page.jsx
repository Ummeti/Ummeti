'use client';

import { useState } from 'react';
import AppleIcon from '@/components/icons/AppleIcon';
import GoogleIcon from '@/components/icons/GoogleIcon';
import Image from 'next/image';
import Breadcrumb from '@/components/widgets/Breadcrumb';

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleSelectAmount = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto shadow-lg">
      <div className="bg-white md:col-span-3 p-4 sm:p-6 md:p-12">
        <Breadcrumb />
        <div className="relative aspect-video rounded-lg overflow-hidden mt-4">
          <Image src="/bg-1.jpg" alt="test" fill objectFit="cover" />
        </div>
        <div className="space-y-4 mt-4">
          <h3 className="text-base font-medium text-gray-900">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit deleniti natus iusto corrupti exercitationem amet
            sequi repudiandae doloremque? Incidunt nostrum ad, ex aut sint eaque
            nesciunt amet ducimus facere quia laudantium placeat temporibus
            assumenda recusandae nobis consequatur vel voluptatum officiis! Amet
            repellat dolorem autem, sit, perferendis deleniti neque aliquid
            consequatur nobis quis eum eius debitis aperiam reprehenderit minus
            est nulla ullam culpa! Error laboriosam aut repudiandae, earum, at
            minus alias voluptatum reiciendis, amet quia voluptatibus nemo
            nostrum facere similique libero atque cupiditate blanditiis rerum
            dolorem rem ea? Soluta corporis, ratione aliquam perferendis autem,
            veniam neque aliquid voluptatibus distinctio deserunt sit.
          </p>
          <div className="space-y-4">
            <div className="text-gray-900 flex justify-between">
              <span className="font-bold">$7,500</span>
              <span className="font-medium text-gray-600 uppercase">
                $10,000 goal
              </span>
            </div>
            <div className="bg-main-lightest relative h-4 rounded-lg">
              <div className="bg-main h-4 w-[75%] rounded-lg"></div>
              <div className="absolute right-0 font-semibold">75%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-2 mt-20 md:mt-0 md:shadow-xl">
        <form
          action="/process-payment"
          method="POST"
          className="bg-white p-4 sm:p-6 md:p-12"
        >
          <div className="mb-6 space-y-4">
            <button
              type="button"
              className="w-full bg-black text-white flex items-center justify-center rounded-lg p-4 mb-4 hover:bg-gray-800 transition duration-300"
            >
              <AppleIcon className="h-5 w-5 mr-3" />
              Apple Pay
            </button>
            <button
              type="button"
              className="w-full bg-white border border-gray-300 text-gray-800 flex items-center justify-center rounded-lg p-4 mb-4 hover:bg-gray-200 transition duration-300"
            >
              <GoogleIcon className="h-5 w-5 mr-3" />
              Google Pay
            </button>
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm md:text-base font-semibold text-gray-900 mb-2"
            >
              Full name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 p-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-main transition duration-300"
              placeholder="Full name"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm md:text-base font-semibold text-gray-900 mb-2"
            >
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 p-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-main transition duration-300"
              placeholder="Email address"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
              Amount to donate
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[50, 250, 500].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`${
                    selectedAmount === amount
                      ? 'bg-main-dark text-white'
                      : 'bg-main-lightest text-gray-900'
                  } flex items-center justify-center rounded-lg p-4 text-sm font-semibold transition duration-300 hover:bg-main-dark hover:text-white`}
                  onClick={() => handleSelectAmount(amount)}
                >
                  <span className="text-sm">${amount}</span>
                </button>
              ))}
              <div className="flex items-center border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-main">
                <span className="text-gray-600 mr-2">$</span>
                <input
                  className="w-full focus:outline-none text-sm font-medium text-gray-800"
                  id="custom"
                  type="text"
                  name="custom"
                  placeholder="Custom Amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  onFocus={() => setSelectedAmount(null)}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="card-details"
              className="block text-sm md:text-base font-semibold text-gray-900 mb-2"
            >
              Card number
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 p-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-main transition duration-300"
              placeholder="Card Number"
              type="text"
              id="card-details"
              name="card_details"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="expiration-date"
                className="block text-sm md:text-base font-semibold text-gray-900 mb-2"
              >
                Expiration date
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 p-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-main transition duration-300"
                placeholder="MM/YY"
                type="text"
                id="expiration-date"
                name="expiration_date"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm md:text-base font-semibold text-gray-900 mb-2"
              >
                Security code
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 p-4 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-main transition duration-300"
                placeholder="CVC"
                type="text"
                id="cvc"
                name="cvc"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full rounded-lg bg-main text-white px-6 py-4 font-medium text-base hover:bg-main-dark transition duration-300 focus:outline-none focus:ring-2 focus:ring-main"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
