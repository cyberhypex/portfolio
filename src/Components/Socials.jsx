import React from 'react';
import { motion } from 'framer-motion';

import li from '../assets/linkedin.jpeg';
import x from '../assets/twitter.png';
import m from '../assets/facebook.png';
import ig from '../assets/instagram.jpg';

export function Socials() {
  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anshuman-gogoi-b99671211/",
      image: li
    },
    {
      name: "X",
      url: "https://x.com/anshu_26_",
      image: x
    },
    {
      name: "Meta",
      url: "https://www.facebook.com/anshuman.gogoi.10485/",
      image: m
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/anshu_26__/?hl=en",
      image: ig
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10">Connect with Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="bg-[#2a2a3f] rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-blue-500/30"
          >
            <img src={social.image} alt={social.name} className="w-10 h-10 object-contain rounded-full" />
            <p className="text-blue-300 text-lg font-medium">{social.name}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
