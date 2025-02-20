"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <div className="my-4 flex justify-center gap-4">
                <button 
                    onClick={() => setFilter('all')} 
                    className={`text-xs p-2 sm:text-sm sm:px-4 sm:py-2 rounded ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >All Categories</button>
                <button 
                    onClick={() => setFilter('ui-design')} 
                    className={`text-xs  p-2  sm:text-sm sm:px-4 sm:py-2 rounded ${filter === 'ui-design' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >UI Design</button>
                <button 
                    onClick={() => setFilter('web-template')} 
                    className={`text-xs  p-2 sm:text-sm  sm:px-4 sm:py-2 rounded ${filter === 'web-template' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >Web Templates</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4  md:ml-20 sm:ml-28 sm:mr-32 md:mr-24">
                {projects.filter(project => filter === 'all' || project.category === filter).map(project => (
                    <div key={project.id} className="p-4 border rounded shadow">
                        <Link href={project.link} target="_blank">
                            <Image
                                src={project.image}
                                alt={project.name}
                                width={300}
                                height={200}
                                className="rounded"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
