import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/Firebase.config';
export const Context = createContext();
const auth = getAuth(app)
const AuthProvaider = ({ children }) => {
    const [user, setuser] = useState();
    const [loading, setloading] = useState(true)
    // register
    const regsiter = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile
    // const updateProfile = (profile) => {
    //     return updateProfile(auth.currentUser, profile)
    // }
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
        loading
    }
    return (
        <Context.Provider value={userInfo}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvaider;