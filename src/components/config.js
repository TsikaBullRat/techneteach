import { initializeApp } from "firebase/app"
import { getFirestore,  collection, getDocs } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firbaseConfig = {
    apiKey: "AIzaSyAQdDo_HQGZEYz7NXw0Uss1t-CBq0-9G94",
    authDomain: "react-app-7d2cd.firebaseapp.com",
    projectId: "react-app-7d2cd",
    storageBucket: "react-app-7d2cd.appspot.com",
    messagingSenderId: "143755038611",
    appId: "1:143755038611:web:5dbe21477aaf6322832266",
    measurementId: "G-56HL8WFX28"
}

const app = initializeApp(firbaseConfig)
const firestore = getFirestore(app)
const newsCollection = collection(firestore, 'NewsArticles')
const news = getDocs(newsCollection)
const auth = getAuth(app)



export { news, auth }