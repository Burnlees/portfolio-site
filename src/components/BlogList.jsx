import React from "react";
import { getSortedPostsData } from "../lib/posts";
import postsData from "../postsData.json";
import { Link } from "react-router-dom";

export const BlogList = () => {
  return (
    <div className="pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Blogs
            </h1>
            <ul>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
