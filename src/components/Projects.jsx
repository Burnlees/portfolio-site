import { CaseStudy } from "./CaseStudy";
import { projects } from "./Data/data";
import { Card } from "./Utilities/Card";
import { useState } from "react";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5, delay: delay } },
});

export const Projects = () => {
  const [caseStudy, setCaseStudy] = useState(null);
  return caseStudy ? (
    <CaseStudy title={caseStudy} setCaseStudy={setCaseStudy} />
  ) : (
    <div className="container border-b border-neutral-900 pb-4 mb-20">
      <motion.h1
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="pb-16 text-4xl font-thin tracking-tight mt-16 lg:text-6xl"
      >
        Projects
      </motion.h1>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        {projects.map((project) => {
          return (
            <Card
              key={project.title}
              title={project.title}
              desc={project.desc}
              img={project.img}
              finished={project.finished}
              setCaseStudy={setCaseStudy}
            />
          );
        })}
      </motion.div>
    </div>
  );
};
