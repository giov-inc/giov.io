import {
  getMatterFromFile,
  getMatterFromFolder,
  getProcessedMatter,
} from "./matter-handler";
import path from "path";

const cvDirectory = path.join(process.cwd(), "data/cv");

export const getContact = () => {
  const matterResult = getMatterFromFile(`${cvDirectory}/contact.md`);
  return getProcessedMatter(matterResult);
};

export const getIntro = () => {
  const matterResult = getMatterFromFile(`${cvDirectory}/intro.md`);
  return getProcessedMatter(matterResult);
};

export const getExpertises = () => {
  const matterResults = getMatterFromFolder(`${cvDirectory}/expertises`);

  return Promise.all(
    matterResults.map((matter) => {
      return getProcessedMatter(matter);
    })
  ).then((processedMatter) => {
    return sortBy(processedMatter, "order");
  });
};

export const getSkills = () => {
  return {};
};

export const getExperience = () => {
  return {};
};

export const getEducation = () => {
  return {};
};

export const getPortfolio = () => {
  return {};
};

const sortBy = (array, sortValue) => {
  return array.sort((a, b) => {
    if (a[sortValue] < b[sortValue]) {
      return 1;
    } else {
      return -1;
    }
  });
};

// export function getSortedPostsData() {
//   const fileNames = fs.readdirSync(cvDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, "");

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   // Returns an array that looks like this:
//   // [
//   //   {
//   //     params: {
//   //       id: 'ssg-ssr'
//   //     }
//   //   },
//   //   {
//   //     params: {
//   //       id: 'pre-rendering'
//   //     }
//   //   }
//   // ]
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }
