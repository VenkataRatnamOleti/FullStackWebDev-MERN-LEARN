const notifier = require('node-notifier');

// A simple desktop alert
notifier.notify({
  title: 'Alert From Node.js!',
  message: 'Something important just happened.',
  sound: true, // Play a notification sound
  wait: true   // Wait for the user to dismiss it
});
