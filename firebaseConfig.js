import firebase from 'firebase/app';
import 'firebase/database';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDLFiqop4HKVXVBvqIYmE6SGLofqTIJUic",
    authDomain: "charades-expo.firebaseapp.com",
    databaseURL: "https://charades-expo-default-rtdb.firebaseio.com",
    projectId: "charades-expo",
    storageBucket: "charades-expo.appspot.com",
    messagingSenderId: "937789113612",
    appId: "1:937789113612:web:ebbc8c92bc028bc2577529",
    measurementId: "G-H2MZWNEGTR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = getAnalytics(app);
const db = getDatabase();
export { db };
