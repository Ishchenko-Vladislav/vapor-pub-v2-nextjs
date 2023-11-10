import {
  StorageReference,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
const storage = getStorage();
const storageReference = (reference: string) => ref(storage, reference);

export const uploadFile = async (storageRef: string, file: File) => {
  const snapshot = await uploadBytes(storageReference(storageRef), file);
  const url = await getDownloadURL(snapshot.ref);
  const path = snapshot.ref.fullPath;
  //   console.log(path, snapshot);
  //   console.log("snapshot here", url);
  return {
    url,
    path,
  };
};

export const deleteFile = async (storageRef: string) => deleteObject(ref(storage, storageRef));
