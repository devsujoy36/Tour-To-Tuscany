/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logoutuser
  const logoutUser = () => {
    return signOut(auth)
  }

  const loginGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("Current value of user: ", currentUser);
      setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }
  }, [])


  const authInfo = {
    user,
    createUser,
    loginUser,
    logoutUser,
    loginGoogle
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders