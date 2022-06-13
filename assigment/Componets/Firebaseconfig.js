
import { initializeApp } from "firebase/app";
 import { getAuth  } from "firebase/auth";
 import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCg7fhxaMf6LU_BllNxgQ4t3wA0JAYCgaY",
  authDomain: "madproject-4087c.firebaseapp.com",
  projectId: "madproject-4087c",
  storageBucket: "madproject-4087c.appspot.com",
  messagingSenderId: "801626158903",
  appId: "1:801626158903:web:680c51570734c0fa04ccb2",
  measurementId: "G-2H5XB13NXV"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);