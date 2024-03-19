import { createContext, useEffect } from "react";
import auth from "../Components/Authentication/Firebase/firebase.config"
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const provider=new GoogleAuthProvider()
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const axiosPublic=UseAxiosPublic()
    const [loading ,setLoading]=useState(false)
    const [user,setUser]=useState([])

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            if(currentUser){
                // create token and store it 
                const userInfo={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                // token will be removed from local storage
                localStorage.removeItem('access-token')
            }
            console.log(currentUser)
        })
        return ()=> unSubscribe()
    },[axiosPublic])



    const authInfo={user,loading,createUser,userLogin,logOut,googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;