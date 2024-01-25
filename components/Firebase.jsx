import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ5T59KjzgOcfVUyz6cUgD_Q8uTIJRep8",
  authDomain: "dummy-chat-app-a6b00.firebaseapp.com",
  projectId: "dummy-chat-app-a6b00",
  storageBucket: "dummy-chat-app-a6b00.appspot.com",
  messagingSenderId: "915815672844",
  appId: "1:915815672844:web:e95cc6aade22da749dd229",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
