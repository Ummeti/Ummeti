'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '@/components/widgets/Breadcrumb';

export default function Projects() {
  const categories = ['Food aid', 'Orphans', 'Medical aid', 'Urgent'];
  const projects = [
    {
      id: 1,
      title: 'Project A',
      category: 'Food aid',
      image: '/bg-1.jpg',
      description: 'A Food aid project.',
    },
    {
      id: 2,
      title: 'Project B',
      category: 'Orphans',
      image: '/bg-2.jpg',
      description: 'A Orphans project.',
    },
    {
      id: 3,
      title: 'Project C',
      category: 'Medical aid',
      image: '/bg-3.jpg',
      description: 'A Medical aid project.',
    },
    {
      id: 4,
      title: 'Project C',
      category: 'Urgent',
      image: '/bg-4.jpg',
      description: 'A Urgent project.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto mt-20">
      <Breadcrumb />
      <h1 className="text-3xl font-bold text-center mb-6 mt-4">Projects</h1>
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? 'bg-main text-white'
                : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/"
              className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-white transition-all duration-500"
            >
              <div className="">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square rounded-2xl object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                    {project.title}
                  </h6>
                  <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                    0
                  </h6>
                </div>
                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
