import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "../firebase/firebase";

const db = getFirestore(app);

export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, "categories"));
  let data = [];
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
    let document = doc.data();
    data.push({
      id: doc?.id,
      title: document?.name,
      slug: document?.slug,
    });
  });
  return data;
}
