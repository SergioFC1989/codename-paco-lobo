import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBELr5qtUCFs6KtiCxegUR2MrE_qS9QCCw",
  authDomain: "codename-paco-lobo.firebaseapp.com",
  projectId: "codename-paco-lobo",
  storageBucket: "codename-paco-lobo.appspot.com",
  messagingSenderId: "896826417895",
  appId: "1:896826417895:web:9fb0c9ce771da1d5f6b842",
  measurementId: "G-SECX375P8Z"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
