import fs from "fs";
import grayMatter from "gray-matter";
import remark from "remark";
import html from "remark-html";

export const getMatterFromFile = (filePath) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return grayMatter(fileContents);
};

export const getMatterFromFolder = (folderPath) => {
  const fileNames = fs.readdirSync(folderPath);
  return fileNames.map((fileName) => {
    return getMatterFromFile(`${folderPath}/${fileName}`);
  });
};

export const getProcessedMatter = async (matter) => {
  const processedContent = await remark().use(html).process(matter.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matter.data,
  };
};
