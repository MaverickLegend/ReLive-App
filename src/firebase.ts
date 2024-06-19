import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDt342VpbqW57JMvRyGYeD_AGhMV-1PZWM',
    authDomain: 'relive-app-6a0a5.firebaseapp.com',
    projectId: 'relive-app-6a0a5',
    storageBucket: 'relive-app-6a0a5.appspot.com',
    messagingSenderId: '189961198251',
    appId: '1:189961198251:web:1d24ec0e2dff865d9ef5ee',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
