"use client";

import { PDFDownloadLink } from '@react-pdf/renderer';
import CVPDF from './CVPDF';
import { IoMdDownload } from "react-icons/io";

const DownloadCVButton = () => (
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
);

export default DownloadCVButton;