"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagramSquare, FaStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { Code, Paintbrush, LayoutDashboard, ShoppingCart, Server, PencilRuler } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { PDFDownloadLink } from '@react-pdf/renderer';

import CVPDF from "../Components/CVPDF";
import HireMeModal from "../Components/Modal";

export default function Intro() {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['FrontEnd Developer', 'Web-Developer', 'Web-Designing', 'UI/UX Designer'],
        typeSpeed: 50,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <aside className="lg:w-1/4 bg-white p-6 shadow-lg lg:h-[1200px] sm:w-[93%]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Image
            src="/My office.jpeg"
            width={100}
            height={100}
            alt="Profile Picture"
            className="rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Mahab Rizwan</h2>
          <p className="text-yellow-500 text-2xl font-semibold">Front-End Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-row gap-6 justify-center items-center m-4 text-xl border-b pb-4"
        >
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaInstagramSquare />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-2 border-b pb-7 pt-2"
        >
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md lg:p-1">Age :</span>
            <span className="font-medium">22</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md lg:p-1">Residence:</span>
            <span className="font-medium">Karachi, Pakistan</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md lg:p-1">Freelance :</span>
            <span className="font-medium text-lime-600">Available</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md lg:p-1">Marital Status :</span>
            <span className="font-medium">Single</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md lg:p-1">Address :</span>
            <span className="font-medium">Kharadar, Karachi</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 border-b pb-8"
        >
          <h3 className="font-bold text-xl mb-2">Languages</h3>
          <div className="space-y-3">
            {[{ name: "English", level: "80%" }, { name: "Urdu", level: "99%" }].map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{lang.name}</span>
                  <span>{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: lang.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 border-b pb-8"
        >
          <h3 className="font-bold text-xl mb-2">Skills</h3>
          <div className="space-y-3">
            {[{ name: "HTML", level: "95%" }, { name: "CSS", level: "98%" }, { name: "Tailwind CSS", level: "90%" }, { name: "Typescript", level: "80%" }, { name: "Next-Js", level: "88%" }, { name: "Sanity", level: "95%" }, { name: "Figma UI/UX", level: "93%" }].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <PDFDownloadLink 
            document={<CVPDF />} 
            fileName="Mahab_Rizwan_CV.pdf"
            className="w-full"
          >
            {({ loading }) => (
              <button 
                className="bg-yellow-500 w-full my-8 py-3 rounded-lg flex flex-row gap-2 items-center justify-center hover:bg-yellow-600 transition-colors"
                disabled={loading}
              >
                <span className="text-black font-medium text-xl">
                  {loading ? 'Generating CV...' : 'Download CV'}
                </span>
                <IoMdDownload className="text-xl" />
              </button>
            )}
          </PDFDownloadLink>
        </motion.div>
      </aside>

      <main className="flex-1 p-6 mt-16 lg:mt-0 sm:w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center"
        >
          <div className="bg-white p-6 lg:p-8 shadow rounded-lg w-full lg:w-[90%] flex flex-col lg:flex-row">
            <div>
            <h1 className="text-4xl font-bold">
  I&apos;m <span className="text-yellow-500">Mahab Rizwan</span>
</h1>
              <span className="font-bold text-3xl underline decoration-primary"><span ref={el} /></span>
              <p className="mt-2 mr-4">
  I&apos;m a passionate front-end developer who loves crafting visually stunning and highly functional web experiences. 
  With expertise in Next.js, TailwindCSS, and modern web technologies, I build fast, responsive, and user-friendly interfaces. 
  Whether it&apos;s designing sleek e-commerce platforms or optimizing performance, I thrive on turning ideas into reality.
</p>
              <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>Hire Me</button>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-6">
              <Image src="/My office.jpeg" alt="myoffice" width={1200} height={1000} className="h-[90%] lg:h-[80%]"></Image>
            </div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl text-center font-bold mt-10"
        >
          My Services
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mr-16 gap-6 mt-6"
        >
          {[
            { icon: <Code size={40} className="text-yellow-500 mb-3" />, title: "Web Development", description: "Crafting fast, responsive, and modern websites using Next.js, TypeScript, and TailwindCSS." },
            { icon: <Paintbrush size={40} className="text-yellow-500 mb-3" />, title: "UI/UX Design", description: "Creating sleek, user-friendly, and engaging designs with Figma for seamless digital experiences." },
            { icon: <LayoutDashboard size={40} className="text-yellow-500 mb-3" />, title: "Dashboard Development", description: "Building intuitive admin dashboards for data visualization and business management." },
            { icon: <ShoppingCart size={40} className="text-yellow-500 mb-3" />, title: "E-commerce Solutions", description: "Developing high-performing e-commerce stores integrated with Stripe for seamless payments." },
            { icon: <Server size={40} className="text-yellow-500 mb-3" />, title: "Headless CMS Integration", description: "Integrating Sanity CMS for dynamic, scalable, and easily manageable content." },
            { icon: <PencilRuler size={40} className="text-yellow-500 mb-3" />, title: "Custom Web Components", description: "Designing and developing custom UI components that enhance user interaction and experience." },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl font-bold mt-10 flex lg:ml-28 lg:mt-36"
        >
          Recommendations
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-4 lg:mr-16 lg:ml-[-300px]"
        >
          {[
            { Image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Ali Khan", role: "CEO, TechSolutions", review: "Mahab did an amazing job developing our website. Her attention to detail and modern design skills are top-notch!" },
            { Image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Ayesha Noor", role: "Founder, CreativeDesign", review: "Highly professional and skilled! The UI/UX design Mahab created for my project exceeded my expectations." },
            { Image: "https://randomuser.me/api/portraits/men/56.jpg", name: "Ahmed Raza", role: "E-commerce Owner", review: "Mahab's expertise in Next.js and TailwindCSS helped us launch a seamless online store. Highly recommended!" },
          ].map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              <Image 
          src={client.Image} 
          alt="Client" 
          width={100} 
          height={100} 
          className="w-16 h-16 rounded-full mb-3"
        />
              <h3 className="text-lg font-semibold">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.role}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={18} className="text-yellow-500" />)}
              </div>
              <p className="text-gray-600 mt-3">{client.review}</p>
            </motion.div>
          ))}
        </motion.div>

        <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </div>
  );
}