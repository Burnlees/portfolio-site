import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postsData from "../postsData.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              {postData.data.title}
            </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
