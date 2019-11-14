importScripts('www.gstatic.com/firebasejs/7.3.0/firebase-app.js');
importScripts('www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js');
firebase.initializeApp({
'messagingSenderId': '63774090278'
});

const messaging = firebase.messaging();