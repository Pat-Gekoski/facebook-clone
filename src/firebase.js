// import firebase from 'firebase/app';
// import 'firebase/auth';
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAAQ3DfZFpvx8rR9AoMMfUr_4Z4TD0E-n8',
	authDomain: 'facebook-clone-2cc0f.firebaseapp.com',
	databaseURL: 'https://facebook-clone-2cc0f.firebaseio.com',
	projectId: 'facebook-clone-2cc0f',
	storageBucket: 'facebook-clone-2cc0f.appspot.com',
	messagingSenderId: '493478982791',
	appId: '1:493478982791:web:ff1447726a905522af7422',
	measurementId: 'G-H7SRT96NC1',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db as default };
