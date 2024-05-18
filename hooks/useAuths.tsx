import {View,Text} from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function useAuth(){

 
    const [user,setUser] = useState<any | null>(null)


    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,user=>{
            if(user){
                console.log('got user:', user)
                setUser(user);
            } else {
                setUser(null)
            }
        })

        return unsubscribe

    },[])
    return {user}

}