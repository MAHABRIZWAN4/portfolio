"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    
    const projects = [
        { id: 1, category: 'ui-design', name: 'UI Design 1', image: '/port1.JPG', link: 'https://e-commerce-website-meme-shop-gwy4.vercel.app/' },
        { id: 2, category: 'ui-design', name: 'UI Design 2', image: '/port2.JPG', link: 'https://market-place-e-commerce-website-4.vercel.app/' },
        { id: 3, category: 'web-template', name: 'blog wesbite', image: '/port3.JPG', link: 'https://blog-website-46.vercel.app/' },
        { id: 4, category: 'web-template', name: 'admin dashboard', image: '/port4.JPG', link: 'https://admin-dashboard-hackathon3-giaic.vercel.app/' },
        { id: 5, category: 'ui-design', name: 'portfolio', image: '/port5.JPG', link: 'https://portfolio-using-next-js-with-custom-css-4csf.vercel.app/' },
        { id: 6, category: 'web-template', name: 'Analog-Clock', image: '/port6.JPG', link: 'https://my-analog-clock-alpha.vercel.app/' },
    ];

    return (
        <div className="text-center p-8 bg-gradient-to-r from-gray-50 to-blue-50">
            <motion.h1 
                className="text-4xl font-bold mb-8 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Portfolio
            </motion.h1>
            <motion.div 
                className="my-6 flex justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <button 
                    onClick={() => setFilter('all')} 
                    className={`text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                        filter === 'all' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    All Categories
                </button>
                <button 
                    onClick={() => setFilter('ui-design')} 
                    className={`text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                        filter === 'ui-design' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    UI Design
                </button>
                <button 
                    onClick={() => setFilter('web-template')} 
                    className={`text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                        filter === 'web-template' ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    Web Templates
                </button>
            </motion.div>
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                {projects.filter(project => filter === 'all' || project.category === filter).map((project, index) => (
                    <motion.div 
                        key={project.id}
                        className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link href={project.link} target="_blank">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={400}
                                height={250}
                                className="rounded-lg object-cover"
                            />
                            <motion.p 
                                className="mt-3 text-lg font-semibold text-gray-700"
                                whileHover={{ color: "#F59E0B" }} // Orange hover effect
                            >
                                {project.name}
                            </motion.p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Portfolio;