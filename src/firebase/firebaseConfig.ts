import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
const fireauth = getAuth(firebase);
const firestorage = getStorage(firebase);

export const firebaseApp = {
  firestore,
  fireauth,
  firestorage,
};

// firestoreのフィールドを更新する
// import { doc, updateDoc } from "firebase/firestore";

// const washingtonRef = doc(firestore, "cities", "DocumentId");

// Set the "capital" field of the city 'DocumentId'
// await updateDoc(washingtonRef, {
//   capital: true
// });
