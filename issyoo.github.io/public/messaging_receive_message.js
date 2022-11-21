// Handle incoming messages. Called when:

// - a message is received while the app has focus

// - the user clicks on an app notification created by a service worker

//   `messaging.onBackgroundMessage` handler.

import { getMessaging, onMessage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-messaging.js";

const messaging = getMessaging();

onMessage(messaging, (payload) => {

  console.log('Message received. ', payload);

  // ...

});
