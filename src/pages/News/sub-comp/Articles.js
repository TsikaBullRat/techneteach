import { useState, useEffect } from "react"
import { Socials } from "../../../components"

export const Articles = ({data}) =>{

    const [ trigger, setTrigger ] = useState(false)
    useEffect(()=>{
        console.log(data)
    }, [])
    return(
        <div onClick={()=>setTrigger(!trigger)} className="news-sliver">
            <h1>{data.headline}</h1>
            {trigger?(
                <>
                    <div className="article-text">
                        <p>{data.story}</p>
                    </div>
                    <Socials data={data.links}/>
                    <img src={data.picture} className="article-picture"/>
                </>
            ):null}
        </div>
    )
}