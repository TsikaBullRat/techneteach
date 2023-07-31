import { useEffect, useState } from "react"
import { Input, Socials, Nav } from "../"
import { Banner } from "./ContactsBanner"


export const Contacts = () =>{
    
    const [ name, setName ] = useState("")
    const [ last, setLast ] = useState("")
    const [ email, setEmail ] = useState("")

    return (
        <div className="contacts_main">
            <Nav />
            <Banner text={"Contacts"}/>
            <div className="holder">
                <div className="conatcts-box">
                    <div className="book1">
                        <div className="contact-details">
                            <h1>Talk to us</h1>
                            <h3>Email: TechneTeach@gmail.com</h3>
                            <h3>Phone: 0812536014</h3>
                            <Socials/>
                        </div>
                        <div className="email-box">
                            <h3>Join our email group for all info on TechneTeach and the latest in tech news</h3>
                            <Input data={setName} label="Firstname:"/>
                            <Input data={setLast} label="Lastname:"/>
                            <Input data={setEmail} label="Email:"/>
                            <button className="invert-button email-button" >Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}