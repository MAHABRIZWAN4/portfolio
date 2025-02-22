'use client';

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-50 to-blue-50 p-6 md:p-12">
      {/* Form Section */}
      <motion.div 
        className="w-full md:w-1/2 bg-white p-8 shadow-2xl rounded-lg mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Leave Us Your Info</h2>
        <form className="space-y-4" action="https://formspree.io/f/mwpvyzbr" method="POST">
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name (Required)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email (Required)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(245, 158, 11, 0.4)" }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div 
        className="w-full md:w-[47%] p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

        {/* Address Card */}
        <motion.div 
          className="bg-white p-6 shadow-2xl rounded-lg mb-6"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="p-3 bg-yellow-500 rounded-full"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FiMapPin className="text-white" size={24} />
            </motion.div>
            <div>
              <p className="text-gray-700">Country: <strong>Pakistan</strong></p>
              <p className="text-gray-700">City: <strong>Karachi</strong></p>
              <p className="text-gray-700">Street: <strong>Kharadar, Karachi</strong></p>
            </div>
          </div>
        </motion.div>

        {/* Email Card */}
        <motion.div 
          className="bg-white p-6 shadow-2xl rounded-lg mb-6"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="p-3 bg-yellow-500 rounded-full"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FiMail className="text-white" size={24} />
            </motion.div>
            <div>
              <p className="text-gray-700">Email: <strong>mahabrizwan@gmail.com</strong></p>
              <p className="text-gray-700">Skype: <strong>@Yourusername</strong></p>
              <p className="text-gray-700">Telegram: <strong>@Yourusername</strong></p>
            </div>
          </div>
        </motion.div>

        {/* Phone Card */}
        <motion.div 
          className="bg-white p-6 shadow-2xl rounded-lg"
          whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-4">
            <motion.div 
              className="p-3 bg-yellow-500 rounded-full"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
              <FiPhone className="text-white" size={24} />
            </motion.div>
            <div>
              <p className="text-gray-700">Support Services: <strong>15389</strong></p>
              <p className="text-gray-700">Office: <strong>+58 (021)356 567 233</strong></p>
              <p className="text-gray-700">Personal: <strong>+58 (021)356 567 235</strong></p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}