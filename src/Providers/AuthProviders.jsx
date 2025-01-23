/* eslint-disable react/prop-types */

import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("/tourPackages.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => setTours(jsonData))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


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
  const emailVarification = () => {
    return sendEmailVerification(auth.currentUser)
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
    tours,
    user,
    createUser,
    loginUser,
    logoutUser,
    loginGoogle,
    emailVarification,

  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders