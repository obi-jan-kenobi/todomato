import * as firebaseConfig from './config/firebase.json'

import * as firebase from 'firebase'

firebase.initializeApp(firebaseConfig)

export default firebase
