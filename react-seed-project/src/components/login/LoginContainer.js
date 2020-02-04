import React from 'react'
import LoginView from './LoginView.js'
import { login } from '../../utils/auth'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase/firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function LoginContainer(props) {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  const onLogin = () => {
    // signInWithGoogle().then(
    //   result => {
    //     if(result.code){
    //       console.log('error', result.code);
    //     } else {
    //       login(result.credential.accessToken);
    //     }
    //   },
    //   error => console.log('exception', error)
    // );

    login('bolsonaro e o carai');
  }

  return(
    <LoginView user={user} onLogin={onLogin}/>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginContainer);