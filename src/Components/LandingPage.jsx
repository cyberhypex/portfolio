import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/y1.jpeg'; // Ensure path is correct

export function LandingPage(props) {
    return (
       <div className="h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-32 md:pt-24 flex items-start">

            <div className="flex justify-between items-center w-full  max-w-7xl mx-auto flex-wrap gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl  text-justify"
                >
                    
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
  <span className="text-white font-semibold">Hi, I’m <span className="text-blue-400">Anshuman Gogoi</span></span> — a
  <span className="text-white font-medium"> backend-focused full stack developer</span> passionate about building scalable web applications and APIs. I specialize in 
  <span className="text-blue-300 font-semibold"> Spring Boot</span> and love working on systems where performance and structure matter.

  <br /><br />
  Over the past year, I've worked on several
  <span className="text-white font-medium"> real-world projects</span> — from RESTful APIs to full-stack web apps — integrating the frontend and backend seamlessly. My toolbelt includes technologies like React, MySQL, Springboot and Docker, and I'm constantly pushing myself to learn and explore more.

  <br /><br />
  I’m currently pursuing a
  <span className="text-white font-medium"> B.Tech in Electronics and Telecommunication</span>, and I’m eager to step into a software engineering role where I can apply my
  <span className="text-white font-medium"> problem-solving skills</span>, contribute to impactful products, and grow as a developer.

  <br /><br />
  Whether it's collaborating in a team, optimizing backend performance, or experimenting with new stacks, I enjoy the process of turning ideas into working solutions. Let’s build something meaningful.
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
