
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTMYfRpAjxi2KU3-eRQyzPnsfIYWZmIVA",
  authDomain: "nwitter-reloaded-5065d.firebaseapp.com",
  projectId: "nwitter-reloaded-5065d",
  storageBucket: "nwitter-reloaded-5065d.firebasestorage.app",
  messagingSenderId: "294901844653",
  appId: "1:294901844653:web:c584893cd06e25714e5424",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);