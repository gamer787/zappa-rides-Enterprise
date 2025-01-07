import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBC5CZGO9dLDQgDeRY9fzoH-Lvt_wwg1OQ",
  authDomain: "zappa-software-distribution.firebaseapp.com",
  projectId: "zappa-software-distribution",
  storageBucket: "zappa-software-distribution.firebasestorage.app",
  messagingSenderId: "293376556723",
  appId: "1:293376556723:web:e5f0b9b534ff1b7af6fac6",
  measurementId: "G-7F7REN3MYQ"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
    if (err.code === 'failed-precondition') {
        console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
    } else if (err.code === 'unimplemented') {
        console.log('The current browser doesn\'t support all of the features required to enable persistence');
    }
});