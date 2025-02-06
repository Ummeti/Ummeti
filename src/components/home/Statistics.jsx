'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Statistics() {
  const stats = [
    { label: 'Projects', value: 150 },
    { label: 'Supporters', value: 5000 },
    { label: 'People Served', value: 25000 },
  ];

  return (
    <section className="p-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center rounded-lg shadow-sm bg-second-lightest overflow-hidden">
        {stats.map((stat, idx) => (
          <StatCard key={idx} label={stat.label} value={stat.value} />
        ))}
        <div className="flex-1 p-8 text-center bg-main text-white">
          <motion.h3
            className="text-xl font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Be Part of the Change
          </motion.h3>
          <motion.p
            className="mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          >
            <Link href="/#volunteer" className="text-white underline">
              become volunteer
            </Link>
            <span className="text-white"> →</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          clearInterval(counter);
          setCount(value);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={statRef}
      className="flex-1 p-8 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="text-4xl font-bold text-main">{count}</h2>
      <div className="w-12 mx-auto border-t-2 border-black mt-2 mb-4"></div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}
