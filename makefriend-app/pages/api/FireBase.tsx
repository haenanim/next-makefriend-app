// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCLHO9_kBjW47jXCxLqHU_dYDNFfUmtXyg',
  authDomain: 'makefriend-dc4b5.firebaseapp.com',
  projectId: 'makefriend-dc4b5',
  storageBucket: 'makefriend-dc4b5.appspot.com',
  messagingSenderId: '985985807954',
  appId: '1:985985807954:web:d60173f9c63266a54e518b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
