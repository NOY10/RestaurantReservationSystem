import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAXiks8kippHYvu-Uj-SIEJHtn8eRmFrhY",
  authDomain: "miniproject-d47ca.firebaseapp.com",
  projectId: "miniproject-d47ca",
  storageBucket: "miniproject-d47ca.appspot.com",
  messagingSenderId: "1097773150898",
  appId: "1:1097773150898:web:473cf31c6350f427270fab",
  measurementId: "G-LG29HHL16K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth};