import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";
import { Briefcase } from "lucide-react";
import { MdContactPhone } from "react-icons/md";
import Link from "next/link";

import { IoMdDownload } from "react-icons/io";

import { IoMdCloudDownload } from "react-icons/io";

import { Code, Paintbrush, LayoutDashboard, ShoppingCart, Server, PencilRuler } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <aside className="w-full lg:w-1/4 bg-white p-6 shadow-lg lg:h-auto">
        <div className="text-center">
          <Image
            src="/My office.jpeg"
            width={100}
            height={100}
            alt="Profile Picture"
            className="rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Mahab Rizwan</h2>
          <p className="text-yellow-500 text-2xl font-semibold">Front-End Developer</p>
        </div>

        <div className="flex flex-row gap-6 justify-center items-center m-4 text-xl border-b pb-4">
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaInstagramSquare />
        </div>

        <div className="flex flex-col gap-2 border-b pb-7 pt-2">
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md">Age :</span>
            <span className="font-medium">22</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md">Residence :</span>
            <span className="font-medium">Karachi, Pakistan</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md">Freelance :</span>
            <span className="font-medium text-lime-600">Available</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md">Marital Status :</span>
            <span className="font-medium">Single</span>
          </div>
          <div className="flex flex-row justify-between">
            <span className="bg-yellow-400 px-3 py-[1px] font-medium rounded-md">Address :</span>
            <span className="font-medium">Kharadar, Karachi</span>
          </div>
        </div>

        <div className="mt-6 border-b pb-8">
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
        </div>

        <div className="mt-6 border-b pb-8">
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
        </div>
        <button className="bg-yellow-500 w-full my-8 py-3 rounded-lg flex flex-row gap-2 items-center justify-center">
          <span className="text-black font-medium text-xl">Download CV</span>
          <span><IoMdDownload className="text-xl" /></span>
        </button>
      </aside>

      <main className="flex-1 p-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="bg-white p-6 lg:p-16 shadow rounded-lg w-full lg:w-[90%] flex flex-col lg:flex-row">
            <div>
              <h1 className="text-4xl font-bold">I'm <span className="text-yellow-500">Mahab Rizwan</span></h1>
              <p className="text-4xl mt-2 font-bold">Front-End Developer</p>
              <p className="mt-2 mr-4">I'm a passionate front-end developer who loves crafting visually stunning and highly functional web experiences. With expertise in Next.js, TailwindCSS, and modern web technologies, I build fast, responsive, and user-friendly interfaces. Whether it's designing sleek e-commerce platforms or optimizing performance, I thrive on turning ideas into reality.</p>
              <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg">Hire Me</button>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-6">
              <Image src="/My office.jpeg" alt="myoffice" width={1200} height={1000} className="h-[90%]"></Image>
            </div>
          </div>
        </div>

        <h2 className="text-4xl text-center font-bold mt-10">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <Code size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-600 mt-2">Crafting fast, responsive, and modern websites using Next.js, TypeScript, and TailwindCSS.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <Paintbrush size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-gray-600 mt-2">Creating sleek, user-friendly, and engaging designs with Figma for seamless digital experiences.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <LayoutDashboard size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">Dashboard Development</h3>
            <p className="text-gray-600 mt-2">Building intuitive admin dashboards for data visualization and business management.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <ShoppingCart size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">E-commerce Solutions</h3>
            <p className="text-gray-600 mt-2">Developing high-performing e-commerce stores integrated with Stripe for seamless payments.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <Server size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">Headless CMS Integration</h3>
            <p className="text-gray-600 mt-2">Integrating Sanity CMS for dynamic, scalable, and easily manageable content.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <PencilRuler size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold">Custom Web Components</h3>
            <p className="text-gray-600 mt-2">Designing and developing custom UI components that enhance user interaction and experience.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 flex justify-center">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-4 lg:mx-20">
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-16 h-16 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Ali Khan</h3>
            <p className="text-sm text-gray-500">CEO, TechSolutions</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={18} className="text-yellow-500" />)}
            </div>
            <p className="text-gray-600 mt-3">"Mahab did an amazing job developing our website. Her attention to detail and modern design skills are top-notch!"</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-16 h-16 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Ayesha Noor</h3>
            <p className="text-sm text-gray-500">Founder, CreativeDesign</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={18} className="text-yellow-500" />)}
            </div>
            <p className="text-gray-600 mt-3">"Highly professional and skilled! The UI/UX design Mahab created for my project exceeded my expectations."</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
            <img src="https://randomuser.me/api/portraits/men/56.jpg" alt="Client" className="w-16 h-16 rounded-full mb-3" />
            <h3 className="text-lg font-semibold">Ahmed Raza</h3>
            <p className="text-sm text-gray-500">E-commerce Owner</p>
            <div className="flex mt-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} size={18} className="text-yellow-500" />)}
            </div>
            <p className="text-gray-600 mt-3">"Mahab's expertise in Next.js and TailwindCSS helped us launch a seamless online store. Highly recommended!"</p>
          </div>
        </div>
      </main>
    </div>
  );
}
