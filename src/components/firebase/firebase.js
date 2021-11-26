import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvwV4nG7dplWehwEaFSa9ad4DD7BWV7XY",
  authDomain: "insta-80dc9.firebaseapp.com",
  projectId: "insta-80dc9",
  storageBucket: "insta-80dc9.appspot.com",
  messagingSenderId: "630477650527",
  appId: "1:630477650527:web:bdabc4cce341baea4f39ea",
  measurementId: "G-D5RLVGRQ2D",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
