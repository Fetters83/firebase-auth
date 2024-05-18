// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
/* import { getReactNativePersistence } from "firebase/auth"; */

import {getAuth} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACkgtkLraIkGhCHtY5_jAZoFigmSIr5eo",
  authDomain: "fir-auth-6ae81.firebaseapp.com",
  projectId: "fir-auth-6ae81",
  storageBucket: "fir-auth-6ae81.appspot.com",
  messagingSenderId: "62550119625",
  appId: "1:62550119625:web:64d72ef49934e54beda918",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* export const auth = getAuth(app) */
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  export { app, auth, getAuth };