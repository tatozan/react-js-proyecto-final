import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore, query, where, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoh9hWCejhKeyVOYpQ5myKmBYyJMpEFjw",
  authDomain: "bookspot-react.firebaseapp.com",
  projectId: "bookspot-react",
  storageBucket: "bookspot-react.appspot.com",
  messagingSenderId: "659970501387",
  appId: "1:659970501387:web:f86ad87dcb9fe02c77900e"
};

const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);

const productsRef = collection(db, 'products')




export const getItems = (categoryName) => getDocs(categoryName? query(productsRef, where('category','==', categoryName)) : productsRef)
export const getItem =(bookId) => getDoc(doc(productsRef, bookId));











