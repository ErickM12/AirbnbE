import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyB7PJPUCUTydJ6fbkPpZaSXSQhP1z2yc2Q",
    authDomain: "airbnbe-7ac07.firebaseapp.com",
    projectId: "airbnbe-7ac07",
    storageBucket: "airbnbe-7ac07.firebasestorage.app",
    messagingSenderId: "818670305026",
    appId: "1:818670305026:web:ca10b4d2485f06b1a20c1b"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);
export { app, auth, db, storage };