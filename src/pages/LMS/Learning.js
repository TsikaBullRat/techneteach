import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../"
import { Login } from "./Login"
import { useEffect, useState } from "react"
import { Canvas } from "./Canvas"

export const Learning = () =>{
    
    const [ user, setUser ] = useState(false)

    const IsUser = () =>{
        onAuthStateChanged(auth, user =>{
            if(user)setUser(user.uid)
            else setUser(null)
        })
    }
    useEffect(()=>{
        IsUser()
        return ()=>IsUser()
    }, [])

    return(
        <div className="lms">
            {user? <Canvas />:<Login />}
        </div>
    )
}