import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.config';
export const Context = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(true)
    // register
    const regsiter = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile
    const updateprofile = (profile) => {
        setloading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // sign in google
    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // logout
    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        user,
        regsiter,
        logOut,
        login,
        loading,
        updateprofile,
        google
    }
    return (
        <Context.Provider value={userInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvaider;