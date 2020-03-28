import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
 apiKey: "AIzaSyAQALygVvXMWi2HWu_QkRGG3iWCn9xGAlM",
 authDomain: "e-trgovina-1b030.firebaseapp.com",
 databaseURL: "https://e-trgovina-1b030.firebaseio.com",
 projectId: "e-trgovina-1b030",
 storageBucket: "e-trgovina-1b030.appspot.com",
 messagingSenderId: "587786915512",
 appId: "1:587786915512:web:df1f3460450c778ac86e4d",
 measurementId: "G-PHH1ESL56J"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase