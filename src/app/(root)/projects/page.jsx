'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  const categories = ['Web Development', 'Design', 'Marketing', 'Finance'];
  const projects = [
    {
      id: 1,
      title: 'Project A',
      category: 'Web Development',
      image: '/bg-1.jpg',
      description: 'A web development project.',
    },
    {
      id: 2,
      title: 'Project B',
      category: 'Design',
      image: 'https://via.placeholder.com/150',
      description: 'A design project.',
    },
    {
      id: 3,
      title: 'Project C',
      category: 'Marketing',
      image: 'https://via.placeholder.com/150',
      description: 'A marketing project.',
    },
    {
      id: 4,
      title: 'Project C',
      category: 'Marketing',
      image: 'https://via.placeholder.com/150',
      description: 'A marketing project.',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
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
                    $100
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
