import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDBMqlortMP7dvk64lDzKjAOEouPMlHbmM",
    authDomain: "authorized-react.firebaseapp.com",
    databaseURL: "https://authorized-react.firebaseio.com",
    projectId: "authorized-react",
    storageBucket: "authorized-react.appspot.com",
    messagingSenderId: "949284678327",
    appId: "1:949284678327:web:ca47f1448e73b62038bb32"
})

export default app;