import * as firebaseConfig from "./config/firebase.json";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

export default firebase;
