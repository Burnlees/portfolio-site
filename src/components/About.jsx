import React from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const About = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              About <span className="text-primary-600">Me</span>
            </motion.h1>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify"
            >
              Hello! I'm Josh, and my journey has taken me from the small
              Northumberland town of Wooler to the vibrant community of Whitley
              Bay. My professional path began in the world of geotechnical
              drilling, where I honed my skills in precision and analysis.
              However, my career took a significant turn when I ventured into
              financial trading, dealing with the complexities of cryptocurrency
              and the S&P500 markets.
            </motion.p>
            <motion.p
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify"
            >
              Driven by a lifelong passion for technology, I decided to pursue
              my dream of becoming a software developer. I enrolled in an
              intensive bootcamp offered by Northcoders and recently graduated.
              The experience was transformative, and I found immense
              satisfaction in building applications and solving complex
              problems. Software development has become my greatest interest,
              fueling my enthusiasm for continuous learning and innovation.
            </motion.p>
            <motion.p
              variants={container(1.4)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify"
            >
              In addition to my technical pursuits, I have a deep passion for
              music. Over the years, I have dedicated myself to the art of music
              production, with a particular fondness for electronic music.
              Whether I'm coding or creating music, I am constantly inspired by
              the endless possibilities of technology and creativity.
            </motion.p>
            <motion.p
              variants={container(1.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-primary-600 text-justify"
            >
              Thank you for taking the time to learn a bit about me. I look
              forward to connecting and exploring new opportunities in the
              exciting world of software development.
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="my-auto mx-auto lg:mt-64"
        >
          <img
            src="src/assets/about-image.jpg"
            alt=""
            className="rounded-xl w-72"
          />
        </motion.div>
      </div>
    </div>
  );
};
