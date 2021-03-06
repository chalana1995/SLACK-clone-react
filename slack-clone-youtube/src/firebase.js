// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDfEmyaH1PjFRtqMCekQmKdeB3vs_VfVx4",
    authDomain: "slack-clone-yt-228eb.firebaseapp.com",
    projectId: "slack-clone-yt-228eb",
    storageBucket: "slack-clone-yt-228eb.appspot.com",
    messagingSenderId: "367367806011",
    appId: "1:367367806011:web:7d8e6b519cea84335a101e",
    measurementId: "G-61LJGEX6KZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider, db};