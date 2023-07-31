import { useEffect, useLayoutEffect, useState, createElement } from "react"
import { Start } from "./LandingStart"
import { LHome } from "./LandingHome"
import { useSelector, useDispatch } from "react-redux"

export const Landing = () =>{

    const [ turn, setTurn ] = useState(0)
    
    const Run = (Turn) =>{
        Turn(turn)
    }
    
    const [ Comp, setComp ] = useState(Start({Motion:Run, change:setTurn})) 
    useEffect(() =>{
        console.log(Comp)
    }, [turn])


    return(
        <div className="landing_body">
            <Start />
        </div>
    )
}