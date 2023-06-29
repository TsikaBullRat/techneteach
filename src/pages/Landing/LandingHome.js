import { gsap } from "gsap"
import { useEffect } from "react"

export const LHome = ({ Motion, change }) =>{

    const Next = ( line ) =>{
        if(line === 1){
            setTimeout(()=>{
                change(0)
            },9000)
        }
    }

    useEffect(()=>console.log(change), [])

    const Round = () =>{
        gsap.from("[data-animate='fade']", {
            opacity: 0
        })
        gsap.to("[data-animate='fade']", {
            opacity: 1,
            delay: 0.15
        })
    }

    useEffect(()=>{
        Round()
    }, [])

    return(
            <div className="landing_home">
            
        </div>
    )
}