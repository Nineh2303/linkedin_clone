import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import {getAuth} from "firebase/auth"
import {GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCIxhH-114E4le7A2ERBVXoMTjIfPEbBsU",
    authDomain: "linkedin-clone-d18d5.firebaseapp.com",
    projectId: "linkedin-clone-d18d5",
    storageBucket: "linkedin-clone-d18d5.appspot.com",
    messagingSenderId: "687234009695",
    appId: "1:687234009695:web:7e11c54159a75e7cf2a9ea"
};
const firebaseApp =  initializeApp(firebaseConfig)
// used for the firestore refs
const db = getFirestore(firebaseApp)

const provider =  new GoogleAuthProvider();
const firebaseAuth = getAuth(firebaseApp)

export {firebaseAuth, provider}

export default  firebaseApp