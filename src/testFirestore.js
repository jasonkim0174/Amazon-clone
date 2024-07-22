// testFirestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

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
const db = getFirestore(app);

// Test Firestore
const testFirestore = async () => {
  try {
    const docRef = doc(collection(db, 'testCollection'));
    await setDoc(docRef, {
      name: 'Test Document',
      created: new Date().toISOString()
    });
    console.log('Document successfully written!');
  } catch (error) {
    console.error('Error writing document: ', error);
  }
};

testFirestore();
