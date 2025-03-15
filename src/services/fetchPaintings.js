import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../firebase/firebase";

const db = getFirestore(app);

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
