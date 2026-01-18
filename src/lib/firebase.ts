// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4fSnSgx5hm2hL0mxF4Ojb0e4dpZJWGq8",
  authDomain: "prometheus-be323.firebaseapp.com",
  projectId: "prometheus-be323",
  storageBucket: "prometheus-be323.firebasestorage.app",
  messagingSenderId: "757077763473",
  appId: "1:757077763473:web:817fecd0636126b5fc2630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(
  file: File,
  setProgress?: (progress: number) => void
) {
  return new Promise((resolve, reject) => {
    try {
      const storageRef = ref(storage, file.name)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )

          if (setProgress) setProgress(progress)

          switch (snapshot.state) {
            case 'paused':
              console.log('upload is paused')
              break

            case 'running':
              console.log('upload is running')
              break
          }
        },
        error => {
          reject(error)
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
                });
        }
      )
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}
