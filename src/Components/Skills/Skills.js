// import React from 'react';
// import { motion } from 'framer-motion';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles

// // Sample skills data with image paths
// const skills = [
//   { name: "HTML", level: "90%", img: require("../../Images/html.png") },
//   { name: "CSS", level: "85%", img: require("../../Images/css.png") },
//   { name: "JavaScript", level: "80%", img: require("../../Images/javascript.png") },
//   { name: "React JS", level: "75%", img: require("../../Images/react.png") },
//   { name: "Tailwind", level: "90%", img: require("../../Images/tailwind.png") },
//   { name: "Bootstrap", level: "85%", img: require("../../Images/bootstrap.png") },
//   { name: "Node.js", level: "80%", img: require("../../Images/nodejs.png") },
//   { name: "Express.js", level: "75%", img: require("../../Images/expressjs.png") },
//   { name: "Next.js", level: "90%", img: require("../../Images/nextjs.svg") },
//   { name: "Figma", level: "85%", img: require("../../Images/figma.png") },
//   { name: "Canva", level: "80%", img: require("../../Images/canva.png") },
//   { name: "Git", level: "75%", img: require("../../Images/git.png") },
// ];

// const Skills = () => {
//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center py-12 px-6" id="skills">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-12">Skills</h1>

//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//            // Ensure you have this correct
//         >
//           {skills.map((skill, index) => (
//             <SwiperSlide key={index} className="flex flex-col items-center">
//               <img src={skill.img} alt={skill.name} className="h-24 w-24 mb-4" />
//               <motion.div
//                 className="w-full bg-gray-200 rounded-full h-8"
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.3 }}
//               >
//                 <div
//                   className="bg-blue-500 text-white text-sm font-medium h-full flex items-center justify-center rounded-full"
//                   style={{ width: skill.level }}
//                 >
//                   {skill.name} - {skill.level}
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Skills;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


// Sample skills data with image paths
const skills = [
    { name: "HTML", level: "90%", img: require("../../Images/html.png") },
      { name: "CSS", level: "85%", img: require("../../Images/css.png") },
      { name: "JavaScript", level: "80%", img: require("../../Images/javascript.png") },
      { name: "React JS", level: "75%", img: require("../../Images/react.png") },
      { name: "Tailwind", level: "90%", img: require("../../Images/tailwind.png") },
      { name: "Bootstrap", level: "85%", img: require("../../Images/bootstrap.png") },
      { name: "Node.js", level: "80%", img: require("../../Images/nodejs.png") },
      { name: "Express.js", level: "75%", img: require("../../Images/expressjs.png") },
      { name: "Next.js", level: "90%", img: require("../../Images/nextjs2.png") },
      { name: "Figma", level: "85%", img: require("../../Images/figma.png") },
      { name: "Canva", level: "80%", img: require("../../Images/canva.png") },
      { name: "Git", level: "75%", img: require("../../Images/git.png") },
      { name: "C++", level: "90%", img: require("../../Images/c++.png") },
      { name: "Java", level: "85%", img: require("../../Images/java.png") },
      { name: "Python", level: "80%", img: require("../../Images/python.png") },
      { name: "MaterialUI", level: "80%", img: require("../../Images/materialui.png") },
      { name: "MongoDB", level: "75%", img: require("../../Images/mongodb.webp") },
      { name: "MySQL", level: "90%", img: require("../../Images/mysql.png") },
      { name: "PostgresSQL", level: "85%", img: require("../../Images/postgres.png") },
      { name: "Machine Learning", level: "75%", img: require("../../Images/machinelearning.png") },
];

const Skills = () => {
    // SwiperCore.use([Autoplay])
    return (
        <div className="bg-[#0a0c23] min-h-screen flex items-center justify-center py-12 px-6" id="skills">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-100 mb-12 relative">
              <span className="border-b-2 border-purple-600 pb-2">Skills</span>
            </h1>
    
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              loop={true} // Loop through slides
              autoplay={{
                delay: 0, // No delay between transitions
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={5000} // Speed of the continuous scroll
              modules={[Autoplay]}
              className="mySwiper"
            >
              {skills.map((skill, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#111338] p-6 rounded-lg shadow-lg">
                    <img src={skill.img} alt={skill.name} className="h-16 w-16 mx-auto mb-4" />
                    <h2 className="text-lg font-semibold text-gray-100">{skill.name}</h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
};

export default Skills;
