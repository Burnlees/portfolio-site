import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsData from "../postsData.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const getPostById = (id) => {
  return postsData.find((post) => post.id === parseInt(id, 10));
};

export const BlogPost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const blogPost = getPostById(id);
    setPostData(blogPost);
  }, [id]);

  if (!postData) {
    return;
  }

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{duration: 0.5, delay: 0.2}}
              className="breadcrumbs text-sm w-full ml-2"
            >
              <ul>
                <li>
                  <a href="/blog">Blogs</a>
                </li>
                <li>{postData.data.title}</li>
              </ul>
            </motion.div>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight mt-16 lg:text-8xl"
            >
              {postData.data.title}
            </motion.h1>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              <ReactMarkdown
                className="prose text-primary-100 my-2 max-w-xl py-6 font-light text-justify"
                components={{
                  h2: ({ node, ...props }) => (
                    <h2 style={{ color: "white" }} {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong style={{ color: "white" }} {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      style={{ color: "white", fontStyle: "italic" }}
                      {...props}
                    />
                  ),
                }}
                remarkPlugins={[remarkGfm]}
              >
                {postData.content}
              </ReactMarkdown>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
