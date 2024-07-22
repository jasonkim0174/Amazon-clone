// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDG8w1w7Cv2ThJSbXLZimFR6zGlLAsWUO4",
  authDomain: "clone-53f4b.firebaseapp.com",
  projectId: "clone-53f4b",
  storageBucket: "clone-53f4b.appspot.com",
  messagingSenderId: "658341634522",
  appId: "1:658341634522:web:ccb01324c029904cfc20e3",
  measurementId: "G-3EK9M708BH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
