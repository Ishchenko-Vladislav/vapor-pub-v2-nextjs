import { db } from "@/lib/firebase.config";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  DocumentData,
  DocumentReference,
  deleteDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
export const addDocument = async (collectionRef: string, payload: any) =>
  await addDoc(collection(db, collectionRef), payload);

export const updateDocument = async (collectionRef: string, id: string, payload: any) =>
  await updateDoc(doc(db, collectionRef, id), payload);

export const deleteDocument = async (collectionRef: string, id: string) =>
  await deleteDoc(doc(db, collectionRef, id));

export const setDocument = async (collectionRef: string, id: string, payload: any) =>
  await setDoc(doc(db, collectionRef, id), payload);

export const getDocument = async (collectionRef: string, id: string) =>
  await getDoc(doc(db, collectionRef, id));
