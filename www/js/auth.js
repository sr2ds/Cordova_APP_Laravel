function auth() {

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid;
    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      uid = user.uid; 
    }

  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });

}