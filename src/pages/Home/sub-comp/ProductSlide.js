import { useEffect } from "react"
import { gsap } from "gsap"


export const Product = ({data}) =>{

    useEffect(()=>{
        setInterval(()=>{
            gsap.from("[data-anim='enter']", {
                x: 2000
            })
            gsap.to("[data-anim='enter']", {
                x: 0
            }) 
        }, 2000)
    }, [])

    useEffect(()=>{
        console.log(data)
    }, [])

    return(
        <div className="mini-store-slides" >
            <div className="image-contoller">
                {data.pictures.map((item, index)=><img key={index} src={item} className="mini-image" />)}
            </div>
            <div className="product-images" >
                {data.pictures.map((item, index)=><img src={item} className="store-slide-card" data-anim="enter"/>)}
            </div>
        </div>
    )
}