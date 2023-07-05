import { useEffect, useLayoutEffect, useState, createElement } from "react"
import { Start } from "./LandingStart"
import { LHome } from "./LandingHome"
import { useSelector, useDispatch } from "react-redux"

export const Landing = () =>{

    const [ turn, setTurn ] = useState(0)
    
    const Run = (Turn) =>{
        setTimeout(()=>{
            Turn()
            setTimeout(()=>{
                switch(turn){
                    case 0:
                        setTurn(1)
                        break
                    case 1:
                        setTurn(0)
                        break
                }
            }, 1000)
        }, 10000)

    }
    
    useEffect(() =>{
        console.log(turn)
    }, [turn])


    return(
        <div className="landing_body">
            {turn === 0?(
                <Start
                Motion={Run}
                change={setTurn} 
            />
            
            ):(turn === 1?(
                <LHome
                Motion={Run}
                change={setTurn} 
            />
            ):null)}
        </div>
    )
}