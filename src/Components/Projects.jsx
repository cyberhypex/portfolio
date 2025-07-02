import React from 'react';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';

export function Projects(props) {
    const projects = [
        {
            title: 'Linkalyze',
            description: 'A minimal URL shortener built with Spring Boot and MySQL. Includes analytics, authentication, and link management.',
            livelink: 'https://extraordinary-stroopwafel-b89de5.netlify.app/',
           
            techstack: ['Spring Boot','Spring Security','Docker','Neon DB', 'MySQL', 'JWT', 'React', 'TailwindCSS']

        },
        {
    title: 'Valorant-Accessories',
    description: `Are you a newbie wanting to know how Valorant works or what it is?? Don't you worry, I got you.
Presenting Valorant-Accessories, your one stop solution to learn about  Valorant.`,
    livelink: 'https://valorant-accessories-frontend.vercel.app/',
    techstack: ['Springboot','RestTemplate','Spring','ReactJS','TailwindCSS3','Docker']
},{
    title:'Ceaser-Cipher',
    description:'A sleek and modern React.js frontend to encrypt and decrypt messages using the Caesar Cipher technique — one of the oldest known encryption algorithms, famously used by Julius Caesar.',
    livelink:'https://lucent-bubblegum-9def40.netlify.app/',
    techstack:['Springboot','Core Java','Algorithms','ReactJS','TailwindCSS3','Docker']

}

    ];

    return (
        <div className="h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24  flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale:1.03}}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="bg-[#2a2a3f] rounded-2xl shadow-lg p-6 hover:shadow-blue-500/30 transform perspective-1000 transition duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techstack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.livelink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-semibold text-blue-400 hover:text-blue-200"
                        >
                            Live Demo →
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
