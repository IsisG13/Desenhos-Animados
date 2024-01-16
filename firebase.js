import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkJtp3VW8ZBjdRxlOIit_bwJDmWxFh3vo",
    authDomain: "desenhos-animados-33f9f.firebaseapp.com",
    projectId: "desenhos-animados-33f9f",
    storageBucket: "desenhos-animados-33f9f.appspot.com",
    messagingSenderId: "334643257743",
    appId: "1:334643257743:web:665298377285fbaa116bfa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;