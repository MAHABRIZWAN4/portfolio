'use client';

import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'KMA School',
    degree: 'Matriculation',
    year: '2018',
    description: 'KMA School provided a strong foundation in various subjects, fostering a love for learning and academic excellence.',
  },
  {
    institution: 'KMA College',
    degree: 'Intermediate',
    year: '2020',
    description: 'KMA College offered a comprehensive curriculum that prepared me for higher education and professional challenges.',
  },
  {
    institution: 'Governor Sindh Initiative',
    degree: 'Artificial Intelligence, Web 3.0 & Metaverse',
    year: '2023',
    description: "The Governor Sindh Initiative's Artificial Intelligence, Web 3.0 & Metaverse program equips students with cutting-edge skills in AI, blockchain, and decentralized technologies. It enhances both technical expertise and analytical thinking, preparing learners for the future digital landscape." },
];

const Education = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Education</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        My academic journey showcases my dedication and passion for learning.
      </p>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-4 mb-4 last:border-none last:pb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-700">{edu.institution}</h3>
              <p className="text-gray-500">{edu.degree}</p>
              <p className="text-gray-600 mt-2">{edu.description}</p>
            </div>
            <span className="text-sm bg-yellow-400 text-white px-3 py-1 rounded-lg">
              {edu.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
