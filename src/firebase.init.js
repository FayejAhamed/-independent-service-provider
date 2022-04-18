// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgeDtNo3GM5siZINOXnCTF1HUZN5oMP_M",
  authDomain: "ahamed-law-office.firebaseapp.com",
  projectId: "ahamed-law-office",
  storageBucket: "ahamed-law-office.appspot.com",
  messagingSenderId: "806391594027",
  appId: "1:806391594027:web:7a293e9629e8508852be6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;