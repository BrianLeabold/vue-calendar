import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCfzgunQa0rxZLNdBRIkb1NukuN7CmJ7vw",
  authDomain: "consultbrian-calendar.firebaseapp.com",
  databaseURL: "https://consultbrian-calendar.firebaseio.com",
  projectId: "consultbrian-calendar",
  storageBucket: "consultbrian-calendar.appspot.com",
  messagingSenderId: "471100370577",
  appId: "1:471100370577:web:3a0c1f6ea24dd38d6bd930",
  measurementId: "G-GQX4X7FSG7"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
