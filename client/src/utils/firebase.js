
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-87d8d.firebaseapp.com",
  projectId: "fir-87d8d",
  storageBucket: "fir-87d8d.firebasestorage.app",
  messagingSenderId: "1056265147278",
  appId: "1:1056265147278:web:38bf00dc703dfee3c40adf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}