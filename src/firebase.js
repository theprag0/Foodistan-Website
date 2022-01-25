import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD1ynPRWWpLlFNwsFmAHz9R7xw6Ja5MDb4',
  authDomain: 'foodistaan-fa10d.firebaseapp.com',
  projectId: 'foodistaan-fa10d',
  storageBucket: 'foodistaan-fa10d.appspot.com',
  messagingSenderId: '201527710402',
  appId: '1:201527710402:web:eb1ae69603fa92d702215b',
  measurementId: 'G-QZFS2Y0LYZ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export default app;
