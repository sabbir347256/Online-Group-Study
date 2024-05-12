import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('Current user is stay hser',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const logOut =() =>{
        return signOut(auth);
    }


    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        googleLogin,
        loading
    
        
        // assignment
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

AuthContext.propTypes ={
    children : PropTypes.object
}

export default AuthContext;