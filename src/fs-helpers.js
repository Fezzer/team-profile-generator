import { opendir, mkdir } from "node:fs/promises";
import { join } from "node:path";

/**
 * Checks if the specified directory exists, and, if it does not, creates it.
 * @param {string} dir The directory to check if it exists.
 */
export async function checkFolderExistsAsync(dir) {
  try {
    const fsDir = await opendir(dir);
    await fsDir.close();
  } catch (error) {
    mkdir(dir);
  }
}

/**
 * Writes the data into a file and saves it in the specified directory with the specified name.
 * @param {string} dir The directory where the file containing the data will be written.
 * @param {string} file The name of the file that will be created.
 * @param {string} data The data to write into the created file.
 */
export async function writeDataToFileAsync(dir, file, data) {
  await checkFolderExistsAsync(dir);
  const savePath = join(dir, file);
  await writeFile(savePath, data, { encoding: "utf8"});
}