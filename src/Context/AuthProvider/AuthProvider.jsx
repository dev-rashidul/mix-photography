import {
  createUserWithEmailAndPassword,
  getAuth, onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

// Create Context
export const AuthContext = createContext();

// Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState(null);

  // Loading State
  const [loading, setLoading] = useState(true)

  // Login With Google
  const googleLogin = (googleProvider) =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // Create User / Register Function
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Sign Up / Login Function
  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Logout Function
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);

  // AuthInfo Object
  const authInfo = { user, loading, createUser, googleLogin, userLogin, updateUserProfile, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
