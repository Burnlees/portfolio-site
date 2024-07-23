import React from "react";
import { getSortedPostsData } from "../lib/posts";
import postsData from "../postsData.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const BlogList = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Blogs
            </motion.h1>
            <motion.ul
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              {postsData.map((post) => {
                return (
                  <li key={post.data.id}>
                    <div className="my-2 max-w-xl py-6 font-light text-justify border-b border-primary-600">
                      <Link to={`/blog/${post.id}`}>
                        <p className="font-bold">{post.data.title}</p>
                      </Link>
                      <p>{post.data.date}</p>
                    </div>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};
