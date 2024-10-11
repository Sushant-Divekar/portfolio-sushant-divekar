// import './Hero.css'
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const titles = ["Frontend Developer", "Backend Developer", "ML Developer", "Software Developer"];

// const Hero = () => {

//   const [currentTitle, setCurrentTitle] = useState(0);

//   // Cycle through titles with a delay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
//     }, 2000); // Change title every 2 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);


//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-gray-100" id="hero">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <h1 className="text-4xl font-bold mb-4">Hello, I'm Sushant Divekar </h1>
        
//         {/* Animated title switching */}
//         <motion.p
//           key={currentTitle}
//           className="text-3xl text-gray-700 mb-8"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//           transition={{ duration: 0.5 }}
//         >
//           {titles[currentTitle]}
//         </motion.p>

//         <a href="#projects" className="text-white bg-blue-500 px-6 py-3 rounded-lg">View My Work</a>
//       </motion.div>
//     </section>
//   );
// }

// export default Hero;



// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import theme from 'prism-react-renderer/themes/dracula'; // You can choose a different theme if you want

// const titles = ["Frontend Developer", "Backend Developer", "ML Developer", "Software Developer"];

// const Hero = () => {
//   const [currentTitle, setCurrentTitle] = useState(0);

//   // Cycle through titles with a delay
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
//     }, 2000); // Change title every 2 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center space-y-6 md:space-y-0">

//         {/* Left Section (Text and Links) */}
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hello, I'm Sushant Divekar</h1>

//           {/* Animated title switching */}
//           <motion.p
//             key={currentTitle}
//             className="text-3xl md:text-4xl text-blue-500 mb-8"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             transition={{ duration: 0.5 }}
//           >
//             {titles[currentTitle]}
//           </motion.p>

//           <a href="#projects" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
//             View My Work
//           </a>
//         </motion.div>

//         {/* Right Section (Code Snippet) */}
//         <motion.div
//           className="w-full md:w-1/2 mt-12 md:mt-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//         >
//           <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
//             <pre className="text-left text-sm md:text-base whitespace-pre-wrap">
//               <code>
//                 {`const coder = {
//   name: 'Sushant Divekar',
//   skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
//   hardWorker: true,
//   quickLearner: true,
//   problemSolver: true,
//   hireable: function() {
//     return (
//       this.hardWorker &&
//       this.problemSolver &&
//       this.skills.length >= 5
//     );
//   }
// };`}
//               </code>
//             </pre>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';

const titles = ["Frontend Developer", "Backend Developer", "ML Developer", "Software Developer"];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  // Cycle through titles with a delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const codeString = `const coder = {
  name: 'Sushant Divekar',
  skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 
            'MySQL', 'MongoDB', 'Docker', 'AWS'],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <div className="bg-white min-h-screen flex items-center justify-center" id = "hero">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center space-y-6 md:space-y-0">

        {/* Left Section (Text and Links) */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hello, I'm Sushant Divekar</h1>

          {/* Animated title switching */}
          <motion.p
            key={currentTitle}
            className="text-3xl md:text-4xl text-blue-800 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <strong>{titles[currentTitle]}</strong>
          </motion.p>

          <a href="#projects" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            View My Work
          </a>
        </motion.div>

        {/* Right Section (Code Snippet with Syntax Highlighting) */}
        <motion.div
          className="w-full md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
            <Highlight theme={themes.dracula} code={codeString} language="javascript">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-left text-sm md:text-base`} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
