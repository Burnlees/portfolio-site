import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export const getSortedPostsData = async (directoryPath) => {
  if (!directoryPath) return [];

  const fileNames = await fs.readdir(directoryPath);
  const filePromises = fileNames.map((fileName) => {
    return fs.readFile(path.join(directoryPath, fileName), "utf-8");
  });
  const fileContents = await Promise.all(filePromises);

  const postsData = fileContents.map((content, index) => {
    const { data, content: postContent } = matter(content);
    return {
      id: index + 1,
      data: { ...data },
      content: postContent,
    };
  });

  postsData.sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB - dateA;
  });

  console.log(postsData);

  return postsData;
};

export const getPostById = (id, postsData) => {
  if (!postsData.length) return {};
  let postData = {};

  postsData.forEach((data) => {
    console.log(data.id, '<<<< loop data id');
    console.log(id);
    if (data.id === id) {
      console.log(data.id, '<<<<<<< loop');
      postData = { ...data };
    }
  });
  return postData;
};
