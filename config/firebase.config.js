// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAG5GtxTLG9q2JVi_KP3t8MeQGxzhQXAs4",
    authDomain: "second-gear-31e08.firebaseapp.com",
    projectId: "second-gear-31e08",
    storageBucket: "second-gear-31e08.appspot.com",
    messagingSenderId: "1065379843466",
    appId: "1:1065379843466:web:ab6b02804f3f96052a8c73",
    measurementId: "G-BE59Q2FDSP",
};

export const configFirbase = async (file) => {
    // Initialize Firebase
    const firebaseApp= initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    const analytics = await isSupported() ? getAnalytics(firebaseApp) : null

    const storage = getStorage();
    const dateTime = new Date();
    const storageRef = ref(storage, `files/${file.originalname + "       " + dateTime}`);
    const metadata = {
        contentType: file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    // console.log(downloadURL,`from fb config`)
    return downloadURL

};
