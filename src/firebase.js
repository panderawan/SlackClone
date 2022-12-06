import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyCamPOEJo-q0dXKc84SS2rwBY0uFNC0Kn0',
  authDomain: 'slack-clone-ruddy.firebaseapp.com',
  projectId: 'slack-clone-ruddy',
  storageBucket: 'slack-clone-ruddy.appspot.com',
  messagingSenderId: '404331379015',
  appId: '1:404331379015:web:52970d70fea4f51947b462',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { firebaseApp, db, auth, provider };
