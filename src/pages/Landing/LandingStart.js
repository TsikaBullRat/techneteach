import { useEffect, useState } from "react"
import { gsap } from "gsap"
import Logo from "../../res/landing-logo.jpg"  

export const Start = ({ Motion, change }) =>{

    const[ opening, setOpening ] = useState(true)

    const Next = (line) =>{
        if(line === 0){
            setTimeout(()=>{
                gsap.to("[data-animate='anim1']",{
                    x:-2000
                })
                gsap.to("[data-animate='anim2']",{
                    x:-2000,
                    delay: 0.15
                })
                gsap.to("[data-animate='anim3']",{
                    x:-2000,
                    delay: 0.3
                })
                gsap.to("[data-animate='anim4']",{
                    x:-2000,
                    delay: 0.45
                })
                gsap.to("[data-animate='anim5']",{
                    x:-2000,
                    delay: 0.6
                })
                gsap.to("[data-animate='fade']", {
                    opacity: 0,
                    delay: 0.75
                })
                change(1)
            }, 9000)
        }
    }

    const Round = () =>{
        gsap.from("[data-animate='anim1']",{
            x:2000
        })
        gsap.to("[data-animate='anim1']",{
            x: 0,
            delay: 0.75
        })
        gsap.from("[data-animate='anim2']",{
            x:2000,
        })
        gsap.to("[data-animate='anim2']",{
            x:0,
            delay: 0.6
        })
        gsap.from("[data-animate='anim3']",{
            x: 2000,
        })
        gsap.to("[data-animate='anim3']",{
            x: 0,
            delay: 0.45
        })
        gsap.from("[data-animate='anim4']",{
            x:2000,
        })
        gsap.to("[data-animate='anim4']",{
            x: 0,
            delay: 0.3
        })
        gsap.from("[data-animate='anim5']",{
            x:2000,
        })
        gsap.to("[data-animate='anim5']",{
            x:0,
            delay: 0.15
        })
        gsap.from("[data-animate='fade']", {
            opacity: 0,
        })
        gsap.to("[data-animate='fade']", {
            opacity: 1,
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
        <div data-animate="fade" className="landing_main">
            <img data-animate="anim3" src={Logo} />
            <div data-animate="anim2" className="top_box" ></div>
            <div data-animate="anim5" className="right_box"></div>
            <div data-animate="anim4" className="bottom_box"></div>
            <div data-animate="anim1" className="left_box"></div>
        </div>
    )
}