import app from "./app.js";
import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';

export async function subscribeData(subscription) {
    const db = getFirestore(app)
    const dataCollection = collection(db, 'data-store')
    const docRef = await addDoc(dataCollection, subscription)
    return docRef.id
}