import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const Hero = () => {
  return (
    <div className="border-b border-primary-600 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Josh Burnlees
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-primary-600 via-primary-100 to-red-700 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify"
            >
              Hi, I'm Josh, a passionate Junior Software Developer with a strong
              background in full-stack development. I recently completed an
              intensive software engineering program at Northcoders, where I
              honed my skills in modern web technologies such as JavaScript,
              React, and SQL, along with practices like Test-Driven Development
              and agile methodologies.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};
