import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

// ---AuthProvider---
const AuthProvider = ({ children }) => {

    // ---Google Auth Provider---
    const googleProvider = new GoogleAuthProvider();

    // ---Use State---
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState();


    // ---Handle SignUp/Register---
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---Handle LogIn/SignIn---
    const handleLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---Handle Google Login---
    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // ---Handle Update Profile---
    const manageUpdateProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // ---Handle SignOut/Logout---
    const handleLogOut = () => {
        signOut(auth)
    }

    // ---Handle Forgot Password---
    const handleForgotPassword = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    // ---Use Effect---
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser?.email) {
                setUser(currentUser)
                setSuccess(currentUser)
                // Generate Token:
                const { data } = await axios.post(`http://localhost:5110/jwt`, {
                    email: currentUser?.email
                },
                    { withCredentials: true }
                )
                console.log(data)
            }
            else {
                setUser(null)
                // Generate Token (Get):
                const { data } = await axios.get(`http://localhost:5110/logout`,
                    { withCredentials: true }
                )
            }
            setLoading(false)

            // ---Return---
            return () => {
                unSubscribe();
            }
        })
    }, [])

    // ---auth Info---
    const authInfo = {
        handleRegister,
        handleLogIn,
        handleGoogleLogin,
        handleLogOut,
        handleForgotPassword,
        manageUpdateProfile,
        setUser,
        user,
        setSuccess,
        success,
        loading,
        setLoading,
    }

    // Return
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;