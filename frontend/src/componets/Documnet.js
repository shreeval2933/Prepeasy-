import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCJkSktQIrC9ggTA3A2BgWMKWT7JNut3g",
  authDomain: "documents-upload-c952c.firebaseapp.com",
  projectId: "documents-upload-c952c",
  storageBucket: "documents-upload-c952c.appspot.com",
  messagingSenderId: "204410116443",
  appId: "1:204410116443:web:bdf1e072fe503f6606a27e",
  measurementId: "G-6S3K4DJS5S",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

function Documnet() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage.ref();
      const uploadTask = storageRef.child(`pds/${file.name}`).put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% complete`);
        },
        (error) => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Documnet;
