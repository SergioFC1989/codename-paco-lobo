import { db } from './firebase'
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 

export const addNewDocumentFirestore = async (name, data) => await addDoc(collection(db, name), { data })

export const deleteAllCollectionFirestore = async (name) => {
  const getDocuments = await getDocs(collection(db, name));
  getDocuments.forEach(async (id) => await deleteDoc(doc(db, name, id.id)))
};

export const getAllDocumentsFirestore = async (name) => await getDocs(collection(db, name))
