'use client';
import ProgressBar from '@/components/widgets/ProgressBar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({
  project: { title, description, raised, goal },
}) {
  return (
    <motion.div
      className="bg-second-lightest h-full rounded-lg shadow-sm overflow-hidden"
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
        <Image className="object-cover" src="/bg-1.jpg" alt="test" fill />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <ProgressBar raised={raised} goal={goal} />
        <Link
          href="/donate"
          className="block w-fit rounded-lg px-4 py-2 uppercase bg-main hover:bg-main-light duration-300 text-white font-bold"
        >
          Donate
        </Link>
      </div>
    </motion.div>
  );
}
