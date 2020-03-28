import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore.collection('users').doc('Izs7zoaSuQbtCVIeoH5s').collection('cartItems').doc('fyt5ckDSSjMOLiLblSE0')
firestore.doc('users/Izs7zoaSuQbtCVIeoH5s/cartItems/fyt5ckDSSjMOLiLblSE0')
firestore.collection('users/Izs7zoaSuQbtCVIeoH5s/cartItems')
