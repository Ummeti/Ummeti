'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import EmblaCarousel from '../widgets/carousel/EmblaCarousel';

export default function Projects() {
  const repeat = [0, 1, 2, 3, 4, 5];

  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Our projects
      </h2>
      <motion.div
        className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-8"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
          hidden: { opacity: 0 },
        }}
      >
        <EmblaCarousel>
          {repeat.map((item) => (
            <div key={item} className="embla__slide">
              <motion.div
                className="bg-second-lightest rounded-lg shadow-sm overflow-hidden"
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: 'easeOut' },
                  },
                }}
              >
                <div className="relative aspect-video">
                  <Image
                    className="object-cover"
                    src="/bg-1.jpg"
                    alt="test"
                    fill
                  />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit.
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deleniti dignissimos, tempora animi adipisci vitae corrupti
                    numquam quisquam eum perspiciatis rerum?
                  </p>
                  <div className="space-y-2">
                    <div className="text-gray-900 flex justify-between">
                      <span className="font-bold">$7,500</span>
                      <span className="font-medium text-gray-600 uppercase">
                        $10,000 goal
                      </span>
                    </div>
                    <div className="bg-main-lightest relative h-4 rounded-lg">
                      <motion.div
                        className="bg-main h-4 rounded-lg"
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      ></motion.div>
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
              </motion.div>
            </div>
          ))}
        </EmblaCarousel>
      </motion.div>
    </motion.div>
  );
}
