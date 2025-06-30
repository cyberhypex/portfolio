import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/y1.jpeg'; // Ensure path is correct

export function LandingPage(props) {
    return (
        <div className="h-screen w-screen bg-[#1e1e2f] text-white flex items-center px-6 pt-24 md:pt-0">
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto flex-wrap gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl text-left text-justify"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
                        Hey, I'm Anshuman Gogoi
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        <span className="text-white font-semibold">Hi, I’m <span className="text-blue-400">Anshuman Gogoi</span></span> — a
                        <span className="text-white font-medium"> backend-focused full stack developer</span> with strong command of
                        <span className="text-blue-300 font-semibold"> Spring Boot</span>. I’ve worked on several
                        <span className="text-white font-medium"> real-world projects</span>, combining backend expertise with frontend integration.
                        I’m currently pursuing a
                        <span className="text-white font-medium"> B.Tech in Electronics and Telecommunication</span> and actively seeking
                        <span className="text-white font-medium"> internship opportunities</span> to apply my
                        <span className="text-white font-medium"> problem-solving skills</span> and grow as a
                        <span className="text-white font-medium"> software engineer</span>.
                    </p>
                </motion.div>

                <motion.img
                    src={profileImage}
                    alt="Anshuman Gogoi"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-blue-400"
                />
            </div>
        </div>
    );
}
