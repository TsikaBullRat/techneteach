import { useState } from "react"

export const Segment = ({ option, Change}) =>{
    return(
        <div className="segment">
            <div className={option?"segment-on":"segment-off"} onClick={option?()=>Change(!option):null}>LMS</div>
            <div className={option?"segment-off":"segment-on"} onClick={option?null:()=>Change(!option)}>Products</div>
            <hr/>
        </div>
    )
}