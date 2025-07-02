import React from 'react';
import { motion } from 'framer-motion';

import java from '../assets/java.png';
import python from '../assets/python.png';
import js from '../assets/JavaScript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import boot from '../assets/bootstrap.png';
import tail from '../assets/Tailwind_CSS.png';
import sp from '../assets/spring.png';
import spb from '../assets/springboot.png';
import sps from '../assets/spring-security.png';
import msq from '../assets/my-sql.png';
import rct from '../assets/react.png';
import mng from '../assets/mongoDB.png';
import nd from '../assets/node.png';
import exp from '../assets/express.png';
import dc from '../assets/docker.png';
import pm from '../assets/postman.png';

export function Skills() {
  const skills = [
    { image: java, name: "Java" },
    { image: python, name: "Python" },
    { image: js, name: "JavaScript" },
    { image: html, name: "HTML5" },
    { image: css, name: "CSS3" },
    { image: boot, name: "Bootstrap CSS" },
    { image: tail, name: "Tailwind CSS" },
    { image: rct, name: "React JS" },
    { image: nd, name: "Node JS" },
    { image: exp, name: "Express JS" },
    { image: sp, name: "Spring" },
    { image: spb, name: "Spring Boot" },
    { image: sps, name: "Spring Security" },
    { image: msq, name: "MySQL" },
    { image: mng, name: "MongoDB" },
    { image: dc, name: "Docker" },
    { image: pm, name: "Postman" }
  ];

  return (
    <div className="h-screen w-screen bg-[#1e1e2f] text-white px-6 pt-24  ">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">Skills</h2>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-[#2a2a3f] rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-blue-500/30"
            >
              <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-3 object-contain" />
              <p className="text-blue-300 text-sm font-medium text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
