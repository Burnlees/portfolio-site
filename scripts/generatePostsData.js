import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Adjust this path based on your directory structure
const postsDirectory = path.join(process.cwd(), 'posts');

const generatePostsData = async () => {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const filePromises = fileNames.map(async (fileName, index) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(fileContents);
      return {
        id: index + 1,
        data: { ...data },
        content,
      };
    });
    const postsData = await Promise.all(filePromises);

    postsData.sort((a, b) => {
      const dateA = new Date(a.data.date);
      const dateB = new Date(b.data.date);
      return dateB - dateA;
    });

    await fs.writeFile(
      path.join(process.cwd(), 'src', 'postsData.json'),
      JSON.stringify(postsData, null, 2)
    );

    console.log('Posts data generated successfully.');
  } catch (error) {
    console.error('Error generating posts data:', error);
  }
};

generatePostsData();