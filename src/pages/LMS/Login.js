import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { Input, auth } from "../"

export const Login = () =>{

    const [ name, setName ] = useState(null)
    const [ last, setLast ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ cell, setCell ] = useState(null)
    const [ pass, setPass ] = useState(null)
    const [user, setUser ] = useState(true)
    const [ check, setCheck ] = useState(false)
    const [ message, setMessage ] = useState(null)
    
    const Check = (text) =>{
        if(pass === text){
            setCheck(false)
        }else{
            setCheck(true)
        }
    }

    const SignUp = () =>{  
        switch(null){
            case name:
                setMessage("Please fill in your name");
                break;
            case last:
                setMessage("Please fill in your last name");
                break;
            case email:
                setMessage("Please enter your email address");
                break;
            case cell: 
                setMessage("Please enter your cellphone number");
                break;
            case pass:
                setMessage("Enter a password");
                break;
            default:
                setMessage(null);
                if(!check){
                    createUserWithEmailAndPassword(auth, email, pass )
                        .then(userCred=>{
                            userCred.user.displayName = name + " " + last
                            userCred.user.phoneNumber = cell
                        })
                }
                break;
        }
    }


    const SignIn = () =>{
        switch(null){
            case email:
                setMessage("Please enter your email address");
                break;
            case pass:
                setMessage("Enter a password");
                break;
            default:
                setMessage(null);
                signInWithEmailAndPassword(auth, email, pass )
                        .then(userCred=>{
                            userCred.user.displayName = name + " " + last
                            userCred.user.phoneNumber = cell
                        })
                console.log("Signed In")
                break;
        }
    }
    return(
        <div className="lms">
            <div className={`learning-info-box ${user?null:"hide-left"}`}>
                <h2>Enter details here</h2>
                <Input label="Email address:" data={setEmail} />
                <Input  label="Password:" data={setPass} />
                <button onClick={SignIn} className="invert-button lms-button2">Sign In</button>
                <button onClick={()=>setUser(!user)} className="invert-button lms-button">Sign Up</button>
            </div>
            <div className={`learning-def-box ${user?"def-right":null}`}>
                <h1>Welcome to TechneTeach LMS</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, tellus vitae lobortis mattis, metus ipsum convallis dolor, et congue arcu nibh eget massa. Sed felis tellus, efficitur et elit consequat, scelerisque consectetur enim. Quisque malesuada metus ultrices pretium euismod. Aenean vitae leo auctor, vulputate elit in, posuere eros. Donec finibus, risus id aliquam aliquam, risus sem sodales massa, eu vulputate turpis ipsum eget purus. Etiam porttitor consectetur augue, id tincidunt orci faucibus sit amet.
                </p>
            </div>
            <div className={`learning-detail-box ${user?"hide-right":null}`}>
                <h2>Enter details here</h2>
                {message?<h3>{message}</h3>:null}
                <Input label="Firstnames:"  data={setName} />
                <Input label="Lastname:" data={setLast} />
                <Input label="Email address:" data={setEmail} />
                <Input label="Cellphone:" data={setCell} />
                <Input  label="Password:" data={setPass} />
                <Input  label="Re-password:" data={Check} />
                {check?<p>Passwords do not match</p>:null}
                <button onClick={()=>setUser(!user)} className="invert-button lms-button2">Sign In</button>
                <button onClick={(SignUp)} className="invert-button lms-button">Sign Up</button>
            </div>
        </div>
    )
}