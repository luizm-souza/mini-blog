import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmylkjH_C80ElRUmbi5wRQxy3kn25c6zw",
  authDomain: "miniblog-24f02.firebaseapp.com",
  projectId: "miniblog-24f02",
  storageBucket: "miniblog-24f02.appspot.com",
  messagingSenderId: "715128019268",
  appId: "1:715128019268:web:9b474a848a311f2a3fdf11"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};