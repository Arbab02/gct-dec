'use client'
// Import required dependencies
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBrush, FaDatabase, FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn to build modern web applications using HTML, CSS, JavaScript, and React.",
    icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
    image: "https://via.placeholder.com/150/1e90ff/ffffff?text=Web+Development",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Master the art of creating intuitive and visually appealing user interfaces.",
    icon: <FaBrush className="text-pink-500 text-4xl" />,
    image: "https://via.placeholder.com/150/ff1493/ffffff?text=UI+UX+Design",
  },
  {
    id: 3,
    title: "Database Management",
    description: "Understand how to design, implement, and manage databases effectively.",
    icon: <FaDatabase className="text-green-500 text-4xl" />,
    image: "https://via.placeholder.com/150/32cd32/ffffff?text=Database+Management",
  },
  {
    id: 4,
    title: "Programming Basics",
    description: "Kickstart your programming journey with Python, Java, or C++.",
    icon: <FaCode className="text-purple-500 text-4xl" />,
    image: "https://via.placeholder.com/150/800080/ffffff?text=Programming+Basics",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Create stunning mobile applications for Android and iOS platforms.",
    icon: <FaMobileAlt className="text-orange-500 text-4xl" />,
    image: "https://via.placeholder.com/150/ffa500/ffffff?text=Mobile+App+Development",
  },
  {
    id: 6,
    title: "Cloud Computing",
    description: "Explore the world of cloud technologies like AWS, Azure, and Google Cloud.",
    icon: <FaCloud className="text-teal-500 text-4xl" />,
    image: "https://via.placeholder.com/150/008080/ffffff?text=Cloud+Computing",
  },
];

const gradientCard = 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-950 to-gray-950'

const Courses = () => {
  return (
    <div className="bg-[#cbd3cb] pt-32">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Courses
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              className={`${gradientCard} rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-300 mb-3 text-center">{course.title}</h3>
                <p className="text-gray-300 text-center">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
