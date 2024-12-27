"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  const gradientButton = 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-950'

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-gray-400 bg-[#cbd3cb] pt-[7rem] body-font font-medium"
    >
      <div className="container mx-auto flex px-4 py-6 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="title-font sm:text-4xl text-3xl md:text-4xl mb-4 text-gray-800 font-bold"
            variants={childVariants}
          >
           Learn to live in Future with&nbsp;
            <br className="hidden lg:inline-block" />
               Our Advance  <span className='text-[green]'> G.C.T </span>Courses!
          </motion.h1>
          <motion.p className="mb-8 leading-relaxed text-lg text-justify text-gray-800" variants={childVariants}>
          Government College of Technology, SITE Karachi, formerly known as Karachi Polytechnic Institute, is a pioneering government technical institute in Pakistan.
         
          <Link href='/Form'><button className={`block rounded ${gradientButton} sm font-normal mt-4 text-white px-6 py-3`}>Join Our Courses </button></Link>
          </motion.p>
          <motion.div className="flex justify-center" variants={childVariants}>
          
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Image
            className="object-cover object-center rounded hero"
            alt="hero"
            src="/hero.png"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
