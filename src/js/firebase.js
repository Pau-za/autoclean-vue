import firebase from 'firebase'
require("firebase/firestore")
// import store from '@/store'
// import router from '../router';


const config = {
  apiKey: "AIzaSyCtnnkI5WnROzwdlNfTpx3GZKgLfuFrnkg",
  authDomain: "autoclean-vue.firebaseapp.com",
  databaseURL: "https://autoclean-vue.firebaseio.com",
  projectId: "autoclean-vue",
  storageBucket: "autoclean-vue.appspot.com",
  messagingSenderId: "1062335017347",
  appId: "1:1062335017347:web:0934c0ec40a82ac4"
};

const fb = firebase.initializeApp(config);


firebase.auth().onAuthStateChanged((user) => {
  // console.log(user);
  if (user) {
    console.log(user);
    //   router.replace('feed');
    // redirigir a la vista protegida
    this.$store.dispatch('observer', {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    });
  } else {
    // this.$store.dispatch('observer', null);
    // redirigir a la vista de login
    console.log('no hay usuario activo');
  }
})


const db = firebase.firestore();

export { db }
