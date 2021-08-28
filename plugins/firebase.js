import firebase from "firebase"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyACgwWp0TiejtXVIPZ8XeUcZJw3kztXZrU",
    authDomain: "fir-study-83eb2.firebaseapp.com",
    projectId: "fir-study-83eb2",
    storageBucket: "fir-study-83eb2.appspot.com",
    messagingSenderId: "1081771239731",
    appId: "1:1081771239731:web:72734b54ff9bcd6d48f646",
    measurementId: "G-50ZT16976Q"
  });
}

export default firebase;
