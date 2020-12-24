import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyALQhNAdVl9cUr2h06poTqWk9_tyJuD-mI",
    authDomain: "story-hub-5867e.firebaseapp.com",
    projectId: "story-hub-5867e",
    storageBucket: "story-hub-5867e.appspot.com",
    messagingSenderId: "643954120653",
    appId: "1:643954120653:web:e5cfcb07c09c931a109684"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore() 
