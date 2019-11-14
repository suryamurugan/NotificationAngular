importScripts('www.gstatic.com/firebasejs/7.3.0/firebase-app.js');
importScripts('www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js');
firebase.initializeApp({
'messagingSenderId': 'your-sender-id'
});

const messaging = firebase.messaging();