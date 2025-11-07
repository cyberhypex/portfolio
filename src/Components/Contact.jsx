import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24 flex items-center justify-center">
      <div className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 underline underline-offset-4">
          Contact Me
        </h1>

        <div className="space-y-2 text-lg md:text-xl">
          <p>📧 Email: anshgogoi201@gmail.com</p>
          <p className="flex items-center justify-center gap-2">
            Contact me here: +91-8812949911
           
          </p>
        </div>

        <a
          href="https://drive.google.com/file/d/1RW-GR1CByaTvEZtHhOT-_WW-pCaN3qeb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 border border-white  hover:text-black font-semibold rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300"
        >
          View Resume
        </a>

        <a
          href="https://github.com/cyberhypex"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 border border-white  hover:text-black font-semibold rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300"
        >
          View my Github
        </a>
      </div>
    </div>
  );
}
