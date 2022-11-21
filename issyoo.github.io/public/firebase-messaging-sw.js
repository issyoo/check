  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getMessaging } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging.js";
  import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging-sw.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyAN-X9u7n7QnM8RLrVV4YnXq2MmVz6WNfw",

    authDomain: "em-issyoo.firebaseapp.com",

    projectId: "em-issyoo",

    storageBucket: "em-issyoo.appspot.com",

    messagingSenderId: "33480809995",

    appId: "1:33480809995:web:74df1e056f7638d0b5310e",

    measurementId: "G-C64NWHRT0Y"

  };


  const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    "notification": {

    "title": "New Appointment Requested",

    "body": "5 to 1",

    "icon": "/https://firebasestorage.googleapis.com/v0/b/em-issyoo.appspot.com/o/EouWe7VUcAUMTpJ.jpeg?alt=media&token=a10c993f-0f3c-4cf4-9b02-f7adebcb1d02",

    "click_action": "https://issyoo.github.io/msg"

},

 "to": "token"
  };
 

    
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

