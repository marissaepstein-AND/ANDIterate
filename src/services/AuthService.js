// import firebase from "firebase";

// let resolvedtoken = "";
// function loginAuth(){
//   const firebaseApp = firebase.apps[0];
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
//   firebase.auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log("Sign in succesful");
//       console.log(token);
//       resolvedtoken = token;
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });
// }

// export default {loginAuth, resolvedtoken}

function login() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (token) {
        resolve(token);
      }
      reject(new Error("Failed to login"));
    });
  });
}
function getToken() {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (token) {
        resolve(token);
      }
      reject(new Error("Failed to get token"));
    });
  });
}
export default { login, getToken };