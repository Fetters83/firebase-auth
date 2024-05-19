// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
/* import { getReactNativePersistence } from "firebase/auth"; */

import {getAuth} from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  //Enter API information for the app setup in Firebase

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* export const auth = getAuth(app) */
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

  export { app, auth, getAuth };
