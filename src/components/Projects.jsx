import { CaseStudy } from "./CaseStudy";
import { projects } from "./Data/data";
import { Card } from "./Utilities/Card";
import { useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [caseStudy, setCaseStudy] = useState(null);
  console.log(caseStudy);
  return caseStudy ? (
    <CaseStudy title={caseStudy} setCaseStudy={setCaseStudy} />
  ) : (
    <div className="container border-b border-neutral-900 pb-4 mb-20">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0 }}
        className="flex gap-4 flex-wrap"
      >
        {projects.map((project) => {
          return (
            <Card
              title={project.title}
              desc={project.desc}
              img={project.img}
              setCaseStudy={setCaseStudy}
            />
          );
        })}
      </motion.div>
    </div>
  );
};
