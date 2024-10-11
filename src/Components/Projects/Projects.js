import './Projects.css'
import React from 'react';
import { motion } from 'framer-motion';


const projects = [

  {
    title: 'CollegeAtGlance',
    techstack: 'React.js, Node.js, React,Machine learning, Python',
    description: 'Developed Random Forest model for percentile to college prediction in a team project.Contributed to dataset creation and frontend .Implemented a user-friendly React frontend for Mht-CET percentile-based college predictions.Designed and integrated features like marks-to-percentile converter and city-ranked college directory. More than 100 users have used the website',
    img: require('../../Images/CollegeAtGlance.png'),
    link: 'https://github.com/Sushant-Divekar/CollegeAtGlance',
    livelink: 'https://cagclient.onrender.com/'
  },

  {
    title: 'Travalo',
    techstack: ' Mongo db, Express js, React js, Node js , Razorpay payment',
    description: 'To provide users with a seamless experience for exploring and booking travel destinations worldwide. Browse and explore various travel destinations worldwide with user friendly interface. Utilized the MERN stack (MongoDB, Express.js, React, Node.js) to ensure efficient data management and dynamic user experience. Integrated Razorpay test mode for secure trip payments. Implemented JWT for user authentication. Used Bcrypt to protect user passwords.',
    img: require('../../Images/Travalo.png'),
    link: 'https://github.com/Sushant-Divekar/Travalo',
  },

  {
    title: 'City Crime Records Bureau',
    techstack: 'React.js, Node.js, RESTful APIs',
    description: 'Analyzed Mumbai Police operational procedures across zones and regions to design the project schema. Developed a web application for easing the process of case reporting and analysis. Contributed to team project with frontend functionalities in React JS. Utilized the MySQL and React JS to build a robust and scalable web application. Collaborated closely with police inspectors and havaldars to develop the project schema. Received appreciation from the Joint Commissioner for project presentation.',
    img: require('../../Images/NCRB.png'),
    link: 'https://github.com/Sushant-Divekar/CCRB_Repo',
  },

  {
    title: 'Exam System for Blind People',
    techstack: 'React.js, Node.js, Raspberry Pi, RESTful APIs, Python',
    description: 'Conceptualized and led the development of an exam system for individuals with disabilities (Blind, Dyslexic) utilizing web technologies and hardware. Reduced MCQ exam processing time by 40% compared to existing market solutions.Implemented text-to-speech for MCQ questions with options and a custom Raspberry Pi keyboard.Improved system runtime and reduced costs by 50% compared to existing solutions.',
    img: require('../../Images/BlindPeopleExam.jpeg'),
    link: 'https://github.com/Sushant-Divekar',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="bg-[#0a0c23] min-h-screen  py-20" id="projects">
      <h2 className="text-white text-3xl text-center font-bold mb-12">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-4 inline-block">GitHub Repo</a><br/>
              <a href = {project.livelink} className="text-blue-500 mt-4 inline-block">Link</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   { name: 'Travalo', description: 'A global travel booking platform.' },
//   { name: 'City Crime Records Bureau', description: 'Crime record management system.' },
//   // Add more projects
// ];

// const Projects = () => {
//   return (
//     <section className="py-12 px-4 bg-white">
//       <h2 className="text-4xl text-center font-bold mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-100 p-6 rounded-lg shadow-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.3 }}
//           >
//             <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
//             <p className="text-gray-700">{project.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
