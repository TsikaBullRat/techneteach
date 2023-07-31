import { useState } from "react"
import { Input } from "../"

export const Learning = () =>{

    const [ name, setName ] = useState(null)
    const [ last, setLast ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ cell, setCell ] = useState(null)
    const [ pass, setPass ] = useState(null)
    const [ rePass, setRePass ] = useState(null)
    return(
        <div className="lms">
            <div className="learning-def-box">
                <h1>Welcome to TechneTeach LMS</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar, tellus vitae lobortis mattis, metus ipsum convallis dolor, et congue arcu nibh eget massa. Sed felis tellus, efficitur et elit consequat, scelerisque consectetur enim. Quisque malesuada metus ultrices pretium euismod. Aenean vitae leo auctor, vulputate elit in, posuere eros. Donec finibus, risus id aliquam aliquam, risus sem sodales massa, eu vulputate turpis ipsum eget purus. Etiam porttitor consectetur augue, id tincidunt orci faucibus sit amet.
                </p>
            </div>
            <div className="learning-detail-box">
                <h2>Enter details here</h2>
                <Input label="Firstnames:"  data={setName} />
                <Input label="Lastname:" data={setLast} />
                <Input label="Email address:" data={setEmail} />
                <Input label="Cellphone:" data={setCell} />
                <Input  label="Password:" data={setPass} />
                <Input  label="Re-password:" data={setRePass} />
                <button className="invert-button lms-button">Sign Up</button>
            </div>
        </div>
    )
}