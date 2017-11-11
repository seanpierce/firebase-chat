## Firebase Chat
A simple, asynchronous chat application using firebase's real time database API

### Usage
```shell
$ git clone https://github.com/seanpierce/firebase-chat
$ cd firebase-chat
$ mkdir inc && touch firebase.js
```
Next add the following to the inc/firebase.js file, replacing the info with your project information, found in the <a href="https://console.firebase.google.com">firebase console</a>
``` javascript
// Initialize Firebase
var config = {
  apiKey: "MY-API-KEY",
  authDomain: "MY-AUTH-DOMAIN",
  databaseURL: "MY-DATABASE URL",
  projectId: "MY-PROJECTID",
  storageBucket:  "MY-STORAGE-BUCKET",
  messagingSenderId: "MY-MESSAGING-SENDER-ID"
};
firebase.initializeApp(config);
```

Then, open the index.html file in your browser!

### Contact, License, Contributions
* Contact me @ sumler.sean@gmail.com
* MIT License, open source everything always.
* Contribute by submitting a <a href="https://github.com/seanpierce/firebase-chat/pulls">pull request</a>, or create an <a href="https://github.com/seanpierce/firebase-chat/issues">issue</a>.
