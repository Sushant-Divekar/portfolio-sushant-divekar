import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science And Engineering",
    institution: "Sardar Patel Institute of Technology",
    duration: "2021 - Present",
    description: "GPA: 7.5 | Relevant courses: Data Structures, Machine Learning, Cloud Computing, NLP, DBMS, Computer Networks, Operating System.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Bhavan's Junior College",
    duration: "2019 - 2020",
    description: "Percentage: 82% | Focused on Mathematics, Physics, and Computer Science.",
  },
  {
    degree: "Secondary School Education",
    institution: "Harnai Vidyalaya",
    duration: "2004 - 2018",
    description: "Percentage: 94% | Science stream with excellent performance in technical subjects.",
  },
];

const Education = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-6" id='education'>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Education</h1>

        <div className="space-y-12">
          {educationData.map((education, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-1">{education.degree}</h2>
              <h3 className="text-lg text-gray-600 mb-1">{education.institution}</h3>
              <p className="text-sm text-gray-500">{education.duration}</p>
              <p className="mt-4 text-gray-700">{education.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
