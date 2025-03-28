import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/firebase";

const db = getFirestore(app);

export async function getPaintings() {
  const querySnapshot = await getDocs(collection(db, "paintings"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
}
