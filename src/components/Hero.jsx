import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const Hero = () => {
  return (
    <motion.div
      initial={{ borderColor: "rgba(249, 105, 0, 0)" }}
      animate={{ borderColor: "rgba(249, 105, 0, 1)" }}
      transition={{ duration: 2, delay: 0.5 }}
      className="border-b pb-4 lg:mb-35"
    >
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Josh Burnlees
            </motion.h1>
            <motion.span className="bg-gradient-to-r from-primary-600 via-primary-100 to-red-700 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p className="my-2 max-w-xl py-6 font-light text-justify">
              Hi, I'm Josh, a passionate Junior Software Developer with a strong
              background in full-stack development. I recently completed an
              intensive software engineering program at Northcoders, where I
              honed my skills in modern web technologies such as JavaScript,
              React, and SQL, along with practices like Test-Driven Development
              and agile methodologies.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8 flex items-end justify-center"
        >
          <img
            src="src/assets/transparent_2024-07-17T08-27-07.png"
            alt=""
            className="h-96"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
