import React, { useContext, useEffect } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useState, createContext } from "react";
import {Route, Redirect} from 'react-router-dom'

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props)=>{
    const auth = Auth();
return <AuthContext.Provider value={auth}>{props.children} </AuthContext.Provider>
}

export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export const useAuth = () => useContext(AuthContext);

const getUser = user =>{
    const {displayName, email, photoURL} = user;
    return{name: displayName, email, photo: photoURL};
}

const Auth = ()=>{
    const [user, setUser] = useState(null);
    const signInWithGoogle =()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const signInUser = getUser(res.user);
            setUser(signInUser);
            return res.user;
        })
        .catch(err=>{
            setUser(null);
            return err.message;
        })
    }
    const signOut = () =>{
       return firebase.auth().signOut().then(function() {
            setUser(null);
            return true;
          }).catch(function(error) {
            console.log(error);
            return false;
          });
    }

    const createUser = () => {
       return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
       .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message; 
        console.log(errorCode, errorMessage);
        // ...
      });
    }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
                const currentUser = getUser(usr);
                setUser(currentUser);
            } else {
              // No user is signed in.
            }
          });
    },[])
    return{
        user,
        signInWithGoogle,
        signOut,
        createUser
    }
}
export default Auth;