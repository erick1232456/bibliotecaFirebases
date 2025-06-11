import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

 const firebaseConfig = {
   apiKey: "",
   authDomain: "bdnoaql.firebaseapp.com",
   projectId: "bdnoaql",
   storageBucket: "bdnoaql.firebasestorage.app",
   messagingSenderId: "637512184747",
   appId: "1:637512184747:web:20becfaa04f48b351a98ee",
   measurementId: "G-EXTTNGVH0J"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
