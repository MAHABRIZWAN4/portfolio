"use client";
import { useState } from 'react';
import Image from 'next/image';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');
    
    const projects = [
        { id: 1, category: 'ui-design', name: 'UI Design 1', image: '/port1.JPG' },
        { id: 2, category: 'ui-design', name: 'UI Design 2', image: '/port2.JPG' },
        { id: 3, category: 'web-template', name: 'Web Template 1', image: '/port3.JPG' },
        { id: 4, category: 'web-template', name: 'Web Template 2', image: '/port4.JPG' },
        { id: 5, category: 'ui-design', name: 'UI Design 3', image: '/port5.JPG' },
        { id: 6, category: 'web-template', name: 'Web Template 3', image: '/port6.JPG' },
    ];

    return (
        <div className="text-center p-4">
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <div className="my-4 flex justify-center gap-4">
                <button 
                    onClick={() => setFilter('all')} 
                    className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >All Categories</button>
                <button 
                    onClick={() => setFilter('ui-design')} 
                    className={`px-4 py-2 rounded ${filter === 'ui-design' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >UI Design</button>
                <button 
                    onClick={() => setFilter('web-template')} 
                    className={`px-4 py-2 rounded ${filter === 'web-template' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
                >Web Templates</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-20 mr-24">
                {projects.filter(project => filter === 'all' || project.category === filter).map(project => (
                    <div key={project.id} className="p-4 border rounded shadow">
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={300}
                            height={200}
                            className="rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
