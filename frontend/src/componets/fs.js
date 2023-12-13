import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCJkSktQIrC9ggTA3A2BgWMKWT7JNut3g",
  authDomain: "documents-upload-c952c.firebaseapp.com",
  projectId: "documents-upload-c952c",
  storageBucket: "documents-upload-c952c.appspot.com",
  messagingSenderId: "204410116443",
  appId: "1:204410116443:web:bdf1e072fe503f6606a27e",
  measurementId: "G-6S3K4DJS5S",
};

const app = initializeApp(firebaseConfig);
const Storage = getStorage(app);

export default Storage;
