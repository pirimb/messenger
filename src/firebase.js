import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBSHPZ2cosKYPNUVS4-fO16HX10Q3b_x6s",
    authDomain: "messenger-a2161.firebaseapp.com",
    projectId: "messenger-a2161",
    storageBucket: "messenger-a2161.appspot.com",
    messagingSenderId: "521408053358",
    appId: "1:521408053358:web:d9613c288c70e6ce2da67f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db