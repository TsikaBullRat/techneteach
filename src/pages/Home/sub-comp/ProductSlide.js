import { useEffect, useState } from "react"
import { gsap } from "gsap"


export const Product = ({data}) =>{

    const [ count, setCount ] = useState(0)

    const Display = () =>{
        if(count !== data.pictures.length-1)setCount(count+1)
        else setCount(0)
    }

    useEffect(()=>{
        setTimeout(()=>{
            Display()            
        }, 10000)
    }, [count])

    useEffect(()=>{
            gsap.from("[data-anim='enter']", {
                x: 2000
            })
            gsap.to("[data-anim='enter']", {
                x: 0
            }) 
    }, [count])

    useEffect(()=>{
        setTimeout(()=>{
            gsap.from("[data-anim1='exit']", {
                x: 0
            })
            gsap.to("[data-anim1='exit']", {
                x: -2000
            }) 
        }, 9700)
}, [count])

    return(
        <div className="mini-store-slides" >
            <div className="image-contoller">
                {data.pictures.map((item, index)=><img key={index} onClick={()=>setCount(index)} src={item} className="mini-image" />)}
            </div>
            <div className="product-images" >
                {data.pictures[0] === data.pictures[count]?(
                    <>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                    </>
                ):data.pictures[1] === data.pictures[count]?(
                    <ul>
                        {data.specs?data.specs.map((item, index)=><li key={index}>{item}</li>):(
                            <>
                                <h2>The Topics Covered are</h2>
                                {data.topics.map((item, index)=><li key={index}>{item}</li>)}
                            </>
                        )}
                    </ul>
                ):null}
                <img key={count} src={data.pictures[count]} className="store-slide-card" data-anim="enter" data-anim1='exit'/>
            </div>
        </div>
    )
}