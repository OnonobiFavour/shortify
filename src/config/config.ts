import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
export const config ={
    firebaseConfig: {
        apiKey: "AIzaSyBencTMHYEpPnDyw1WcbZEzxXL0NAkyqAI",
        authDomain: "shortify12.firebaseapp.com",
        projectId: "shortify12",
        storageBucket: "shortify12.appspot.com",
        messagingSenderId: "900928034330",
        appId: "1:900928034330:web:177c626186fb169e06e3a3",
        measurementId: "G-TDKNQSL8SE"
    }
}
const app = firebase.initializeApp(config.firebaseConfig);
const db = app.firestore()
export default db