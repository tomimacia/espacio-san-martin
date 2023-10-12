import { ref, deleteObject } from "firebase/storage";
import { storage } from "../clientApp";

export const deleteFile = async (filePath: string): Promise<void> => {
  const fileRef = ref(storage, filePath);

  try {
    await deleteObject(fileRef);
    console.log(`File ${filePath} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
    throw error;
  }
};

export const deleteMultipleFiles = async (filePaths: string[]) => {
  // Create an array of promises to delete files
  const deletePromises = filePaths.map((filePath) => deleteFile(filePath));

  try {
    // Use Promise.all to delete all files in parallel
    await Promise.all(deletePromises);
    console.log("All files deleted successfully.");
  } catch (error) {
    console.error("Error deleting files:", error);
    throw error;
  }
};
