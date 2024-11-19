import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

console.log(import.meta.env);  // Check if all Firebase keys are logged properly


const  app  =  initializeApp({
    // apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
    // appId: import.meta.env.VITE_FIREBASE_APP_ID,
    apiKey: "AIzaSyCID5wqJbYf5eZMxEfLKT3RV2G03z0t7R0",
    authDomain: "assignment-host-f80aa.firebaseapp.com",
    projectId: "assignment-host-f80aa",
    storageBucket: "assignment-host-f80aa.firebasestorage.app",
    messagingSenderId: "343198421164",
    appId: "1:343198421164:web:345ab1c69f166908040f09"
});

export const firebaseAuth = getAuth(app);
export default app;