import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBJcy-2Jrj-AX10ZDq0Xq42JQEvCrmUAew",
    authDomain: "project-67-3972b.firebaseapp.com",
    projectId: "project-67-3972b",
    storageBucket: "project-67-3972b.appspot.com",
    messagingSenderId: "855435705621",
    appId: "1:855435705621:web:44eae7bca5d1c46c32bd1c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();