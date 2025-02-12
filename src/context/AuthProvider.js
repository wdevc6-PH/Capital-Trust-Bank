import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState('');
    const [openSideNav, setOpenSideNav] = useState(false);
    const handleSideNave = () => {
        setOpenSideNav(!openSideNav)
    }

    //create user with email & password this
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile 
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // sign in with google
    const signInWithGoogle = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider);
    };
    // sign in with email and password
    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    // forget password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // verify email
    const verify = () => {
        return sendEmailVerification(auth.currentUser)
    }

    //logout
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('Token')
        return signOut(auth);
    };

    // user observation
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         setLoading(false)
    //          fetch(`https://capital-trust-bank-server.vercel.app/customer/${currentUser.email}`)
    //            .then((res) => res.json())
    //            .then((data) => {
    //              setRole(data.role);
    //            }); 
    //     })
    //     return () => unsubscribe()
    // }, [])

     useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) { 
            setUser(user);
            fetch(`https://capital-trust-bank-server.vercel.app/customer/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setRole(data.role)
            });
          } else {
            // console.log("else onAuthStateChanged");
            setUser();
          }
        });
      }, []);

    const authInfo = {
        createUser,
        updateUser,
        signInWithGoogle,
        signInWithEmail,
        logOut,
        user,
        loading,
        setLoading,
        forgetPassword,
        verify,
        role,
        setRole,
        openSideNav,
        setOpenSideNav,
        handleSideNave
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;