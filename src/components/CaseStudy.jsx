import React from "react";
import { BreadCrumbs } from "./Utilities/BreadCrumbs";
import { motion } from "framer-motion";
import { caseStudies } from "./Data/data";
import { Link } from "react-router-dom";
import { Carousel } from "./Carousel";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const BreadCrumbMotion = ({ setCaseStudy, title }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <BreadCrumbs setCaseStudy={setCaseStudy} title={title} />
  </motion.div>
);

const TitleMotion = ({ title }) => (
  <motion.h3
    variants={container(0.2)}
    initial="hidden"
    animate="visible"
    className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl mt-20"
  >
    {title}
  </motion.h3>
);

const LinksList = ({ links }) => (
  <motion.div
    variants={container(0.3)}
    initial="hidden"
    animate="visible"
    className="col-start-2"
  >
    <ul className="flex gap-2 flex-wrap">
      {Object.keys(links).map((link) => (
        <li key={link}>
          <a
            className="btn text-xs bg-primary-600 text-primary-900 hover:bg-primary-900 hover:text-primary-100"
            href={links[link]}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FeatureList = ({ keyFeatures }) => (
  <motion.ul
    variants={container(0.5)}
    initial="hidden"
    animate="visible"
    className="my-2 max-w-xl py-3 font-light col-start-1"
  >
    {keyFeatures.map((feature, index) => (
      <li key={index} className="mb-3 text-justify">
        <span className="font-bold">{feature.feature}</span> -{" "}
        {feature.description}
      </li>
    ))}
  </motion.ul>
);

const ConclusionMotion = ({ conclusion }) => (
  <motion.p
    variants={container(0.4)}
    initial="hidden"
    animate="visible"
    className="my-2 max-w-xl py-3 font-light text-justify"
  >
    {conclusion}
  </motion.p>
);

const TechnologiesUsed = ({ technologies }) => (
  <motion.ul
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.7 }}
    className="text-primary-100 p-6 list-disc"
  >
    {technologies.map((tech, index) => (
      <li key={index} className="mb-3">
        {tech}
      </li>
    ))}
  </motion.ul>
);

const CarouselMotion = ({ project }) => (
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Carousel project={project} />
  </motion.div>
);

export const CaseStudy = ({ title, setCaseStudy }) => {
  const project = caseStudies.find((project) => project.title === title);

  return (
    <div className="container flex flex-wrap flex-col py-6">
      <BreadCrumbMotion setCaseStudy={setCaseStudy} title={title} />
      <div>
        <TitleMotion title={title} />
        <LinksList links={project.links} />
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          <ConclusionMotion conclusion={project.conclusion} />
          <FeatureList keyFeatures={project.keyFeatures} />
          <div className="col-start-2 row-start-1 row-span-2 md:grid md:grid-cols-2 md:gap-20 my-2 max-w-xl py-3 font-light">
            <CarouselMotion project={project} />
            <TechnologiesUsed technologies={project.technologiesUsed} />
          </div>
        </div>
      </div>
    </div>
  );
};
