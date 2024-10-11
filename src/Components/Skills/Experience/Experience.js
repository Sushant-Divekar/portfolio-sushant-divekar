import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Pack8",
    duration: "Sep 2023 - Nov 2023",
    description: "Developed a Revenue and Sales Dashboard Concept using the PERN stack ",
  },
  {
    title: "Self Employed",
    duration: "Dec 2021 - Present",
    description: "Code and Build something on everyday",
  },
  
];

const Experience = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-6" id = "experience">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">Experience</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-900 hover:text-white transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{experience.title}</h2>
              <h3 className="text-lg text-blue-500 mb-1">{experience.company}</h3>
              <p className="text-sm text-gray-600">{experience.duration}</p>
              <p className="mt-4">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
