'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '../widgets/ContactInfo';
import Socials from '../widgets/Socials';

export default function Contact() {
  return (
    <motion.div
      className="mt-20 bg-second rounded-lg"
      id="volunteer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif] max-w-6xl max-lg:max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
          hidden: { opacity: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl font-bold text-gray-900">Volunteer Now</h1>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
            nulla sapiente. Temporibus aut, aspernatur omnis iste inventore
            nulla neque? Saepe suscipit sequi qui ex doloremque sunt obcaecati,
            deserunt quisquam voluptate!
          </p>
          <ContactInfo color="text-gray-900" />
          <Socials color="text-gray-900" />
        </motion.div>

        <motion.div
          className="bg-gray-100 p-6 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        >
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-second"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-second"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-second"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-second"
            ></textarea>
            <motion.button
              type="button"
              className="text-gray-900 bg-second hover:bg-second-light tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#333333"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
