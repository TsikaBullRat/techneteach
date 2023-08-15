import { gsap } from "gsap"
import { useEffect } from "react"

export const Box = ({children, position, select}) =>{

    // const Slide = () =>{

    //     switch(position){
    //         case 0:
    //             gsap.to("[data-anim='slide']", {
    //                 x: 0
    //             })
    //             break
    //         case 0:
    //             gsap.from("[data-anim='slide']", {
    //                 scale: 2,
    //             })
    //             gsap.to("[data-anim='slide']", {
    //                 scale: 0,
    //             })
    //             break
    //         case 0:
    //             gsap.to("[data-anim='slide']", {
    //                 x: 0
    //             })
    //             break;
    //         default:
    //             break
    //     }
    //     // if(position === 2){
    //     //     gsap.to("[data-anim='slide']", {
    //     //         x: 0
    //     //     }) 
    //     // }else
    // }

    // useEffect(()=>{
    //     Slide()
    // }, [position])
    return(
        <div 
            className={`carousel-box
                ${position===2?'prev':null}
                ${position===1?'active':null}
                ${position===0?'next':null}     
            }`}
            data-anim='slide'
            onClick={()=>select()} >
            {children}
            {position===1?<button className="standard-button carousel-button">Read more...</button>:null}
        </div>
    )

    // return(
    //     <div 
    //         className={`carousel-box     
    //         }`}
    //         data-anim='slide'
    //         onClick={()=>select()} >
    //         {children}
    //     </div>
    // )
}

