'use client';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/widgets/Breadcrumb';
import Image from 'next/image';

export default function About() {
  return (
    <motion.section
      className="px-4 sm:px-6 md:px-8 mx-auto py-20 max-w-6xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <Breadcrumb />

      <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        <motion.div
          className="relative aspect-video rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            className="object-cover"
            src="/bg-4.jpg"
            alt="About Us image"
            fill
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 lg:items-start items-center text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
            About Ummati
          </h1>
          <p className="text-gray-500 text-base font-normal leading-relaxed">
            Ummati is a global organization aimed at supporting the issues of
            the Islamic nation and advocating for the Palestinian cause.
          </p>
          {/* Stats */}
          <div className="w-full flex justify-center lg:justify-start gap-10">
            {[
              { number: '33+', label: 'Projects' },
              { number: '125+', label: 'Supporters' },
              { number: '52+', label: 'People Served' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h2 className="text-gray-900 text-3xl font-bold font-manrope">
                  {item.number}
                </h2>
                <h3 className="text-gray-500 text-base font-normal">
                  {item.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {[
            {
              title: "Ummati's Vision",
              content:
                'A global organization working within an institutional framework...',
            },
            {
              title: "Ummati's Objectives",
              content:
                'Unifying and coordinating the efforts of the Islamic nation...',
            },
            {
              title: 'What Sets Ummati Apart?',
              content:
                'A global network with access to resources, institutional work, and transparency.',
            },
            {
              title: 'Targeted Groups',
              content:
                'Those affected by wars, refugees, displaced individuals, oppressed groups, and orphans.',
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h2 className="text-gray-900 text-2xl font-bold font-manrope">
                {section.title}
              </h2>
              <p className="text-gray-600 mt-2">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="relative aspect-square rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image className="object-cover" src="/bg-1.jpg" alt="Ummati" fill />
        </motion.div>
      </div>
    </motion.section>
  );
}
