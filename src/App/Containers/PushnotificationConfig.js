import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUserPage, loadMoreStarred} from '../Actions/Creators'
import firebase from 'firebase';
import 'firebase-app';
import firebase_messaging from 'firebase-messaging';
import 'firebase-auth';

var config = {
  messagingSenderId: "742858661405"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();  

class PushnotificationConfig extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
    this.requestPermistion();
    this.retrieveClientToken();
    messaging.onMessage(function(payload) {
      console.log(payload.notification);
      console.log("Message received. ", payload);
      // ...
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
      var n = new window.Notification(notificationTitle,notificationOptions);
      n.addEventListener('click', function () {
        //
       window.location.href = 'https://www.google.com';
      });
      n.close.bind(n)
    });
  // return window.self.registration.showNotification(notificationTitle,
  //     notificationOptions);
  }

  requestPermistion () {
    let that = this;
    messaging.requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
      that.retrieveClientToken();
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
  }

  retrieveClientToken () {
     messaging.getToken()
      .then(function(currentToken) {
        if (currentToken) {
          // sendTokenToServer(currentToken);
          // updateUIForPushEnabled(currentToken);
          console.log(currentToken)
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
          // updateUIForPushPermissionRequired();
          // setTokenSentToServer(false);
        }
      })
      .catch(function(err) {
        console.log('An error occurred while retrieving token. ', err);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
      });
  }

  monitorTokenRefresh () {
    // Callback fired if Instance ID token is updated.
    messaging.onTokenRefresh(function() {
      messaging.getToken()
      .then(function(refreshedToken) {
        console.log('Token refreshed.');
        console.log(refreshedToken)
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        // setTokenSentToServer(false);
        // // Send Instance ID token to app server.
        // sendTokenToServer(refreshedToken);
        // ...
      })
      .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
        // showToken('Unable to retrieve refreshed token ', err);
      });
    });

  }


  render() {
  return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps, {
})(PushnotificationConfig)
