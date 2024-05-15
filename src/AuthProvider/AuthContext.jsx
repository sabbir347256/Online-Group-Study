import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types'
import axios from "axios";
export const AuthProvider = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            console.log(currentUser)
            setUser(currentUser);   
            setLoading(false);

            if(currentUser){
                axios.post('https://online-group-study-server-site.vercel.app/jwt',loggedUser, {withCredentials : true})
                .then(res => {
                })
            }else{
                axios.post('https://online-group-study-server-site.vercel.app/logout',loggedUser,{
                    withCredentials : true
                })
                .then(res => {
                })
            }

        });
        return () =>{
            unSubscribe();
        }
    },[])

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localtheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localtheme)
    }, [theme])

    const toggleTheme = e => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

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
        toggleTheme,
        theme,
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