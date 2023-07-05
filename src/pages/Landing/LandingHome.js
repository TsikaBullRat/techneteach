import { gsap } from "gsap"
import { useEffect } from "react"

export const LHome = ({ Motion, change }) =>{

    const text = "Hello my name is Ntsikayomzi Phenyo Ngcakani and I am still the shit"

    const Next = () =>{
        gsap.to("[data-animate='fade']", {
            opacity: 0,
            delay: 0.3
        })
        gsap.to("[data-animate='box']", {
            x: -2000,
            delay: 0.15
        })
    }

    const Round = () =>{
        gsap.from("[data-animate='fade']", {
            opacity: 0
        })
        gsap.to("[data-animate='fade']", {
            opacity: 1,
            delay: 0.15
        })
        gsap.from("[data-animate='box']", {
            x: 2000,
        })
        gsap.to("[data-animate='box']", {
            x: 0,
            delay: 0.30
        })
        gsap.from("[data-animate='text']", {
            opacity: 0
        })
        gsap.to("[data-animate='text']", {
            opacity: 1,
            delay: 0.45
        })
    }

    useEffect(()=>{
        Round()
    }, [])

    useEffect(()=>{
        Motion(Next)
        return ()=> Motion(Next)
    }, [])

    return(
        <div className="full-brace">
            <div className="text-box1" data-animate='box'>
                {text.split().map((item, index)=>(
                    <p key={index} data-animate='text'>{item}</p>
                ))}
            </div>   
        </div>
    )
}