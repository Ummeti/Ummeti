import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
  const repeat = [0, 1, 2];
  return (
    <div className="pt-20">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Our projects
      </h2>
      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {repeat.map((item) => {
          return (
            <div
              className="bg-second-lightest rounded-lg shadow-sm overflow-hidden"
              key={item}
            >
              <div className="relative aspect-video">
                <Image src="/bg-1.jpg" alt="test" fill objectFit="cover" />
              </div>
              <div className="p-8 space-y-8">
                <h3 className="text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit.
                </h3>
                <p className="text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quisquam, veniam.
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
                <Link
                  href="/donate"
                  className="block w-fit rounded-lg px-4 py-2 uppercase bg-main hover:bg-main-light duration-300 text-white font-bold"
                >
                  Donate
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
