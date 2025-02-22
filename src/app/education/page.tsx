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
    description: "The Governor Sindh Initiative's Artificial Intelligence, Web 3.0 & Metaverse program equips students with cutting-edge skills in AI, blockchain, and decentralized technologies. It enhances both technical expertise and analytical thinking, preparing learners for the future digital landscape."
  },
];

const Education = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 py-16 px-6 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-8 text-gray-800"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Education
      </motion.h2>
      
      <motion.p 
        className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        My academic journey showcases my dedication and passion for learning.
      </motion.p>

      <div className="max-w-6xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-xl shadow-2xl p-8 hover:shadow-3xl transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-2"
                  whileHover={{ color: "#6D28D9" }} // Purple hover effect
                >
                  {edu.institution}
                </motion.h3>
                <p className="text-gray-600 text-lg">{edu.degree}</p>
                <p className="text-gray-500 mt-3">{edu.description}</p>
              </div>
              <motion.span 
                className="text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                {edu.year}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
