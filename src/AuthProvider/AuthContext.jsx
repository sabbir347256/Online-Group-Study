import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState();
    // const [loading,setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('Current user is stay hser',currentUser);
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth);
    }


    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
    
        
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