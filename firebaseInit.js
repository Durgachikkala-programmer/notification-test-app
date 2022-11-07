// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbPDrjnSiJBmO3iLxR0wUImNuIOdIam8",
  authDomain: "notify-42462.firebaseapp.com",
  projectId: "notify-42462",
  storageBucket: "notify-42462.appspot.com",
  messagingSenderId: "908198141782",
  appId: "1:908198141782:web:d50644d94d9bc8161500f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging=firebase.messaging();
const {REACT_APP_VALID_KEY}=process.env;
const publicKey=REACT_APP_VALID_KEY;
export const getToken = async (setTokenFound) => {
    let currentToken = '';
    try {
      currentToken = await messaging.getToken({validKey: publicKey});
      if (currentToken) {
        setTokenFound(true);
      } else {
        setTokenFound(false);
      }
    } catch (error) {
      console.log('An error occurred while retrieving token.', error);
    }
    return currentToken;
  };
  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });