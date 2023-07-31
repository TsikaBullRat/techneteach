import { useState } from "react"

export const Segment = () =>{

    const [ option, setOption ] = useState(false)
    return(
        <div className="segment">
            <div className={option?"segment-on":"segment-off"}>LMS</div>
            <div className={option?"segment-off":"segment-on"}>Products</div>
            <hr/>
        </div>
    )
}