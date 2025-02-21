'use client';

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12">
      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">Leave Us Your Info</h2>
        <form className="space-y-4"  action="https://formspree.io/f/mwpvyzbr"
  method="POST">
          <input  type="text" id='name' name='name' placeholder="Your Full Name (Required)" className="w-full p-2 border border-gray-300 rounded" required />
          <input type="email" id='email' name='email' placeholder="Your Email (Required)" className="w-full p-2 border border-gray-300 rounded" required />
          <input type="text" id='subject' name='subject' placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
          <textarea id='message' name='message' placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded h-32" />
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Send Message</button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="w-full md:w-[47%] p-6">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
          <div className="flex items-center gap-3 mb-2">
            <FiMapPin className="text-yellow-500" size={24} />
            <div>
              <p className="text-gray-700">Country: <strong>Pakistan</strong></p>
              <p className="text-gray-700">City: <strong>Karachi</strong></p>
              <p className="text-gray-700">Street: <strong>Kharadar, Karachi</strong></p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg mb-4">
          <div className="flex items-center gap-3 mb-2">
            <FiMail className="text-yellow-500" size={24} />
            <div>
              <p className="text-gray-700">Email: <strong>mahabrizwan@gmail.com</strong></p>
              <p className="text-gray-700">Skype: <strong>@Yourusername</strong></p>
              <p className="text-gray-700">Telegram: <strong>@Yourusername</strong></p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <FiPhone className="text-yellow-500" size={24} />
            <div>
              <p className="text-gray-700">Support Services: <strong>15389</strong></p>
              <p className="text-gray-700">Office: <strong>+58 (021)356 567 233</strong></p>
              <p className="text-gray-700">Personal: <strong>+58 (021)356 567 235</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}