import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Banner } from "./NewsBanner"
import { Articles } from "./sub-comp"
import { news, addArticles, Nav } from "../"

export const News = () =>{

    const refreshNews = useSelector((state)=>state.news.value)
    const dispatch = useDispatch()
    const [ cache, setCache ] = useState([])

    const Clean = async()=>{
        setCache((await news).docs.map(item=>item.data()))
    }

    useEffect(()=>{
        Clean()
    }, [])

    // useEffect(()=>{
    //     dispatch(addArticles(cache))
    // }, [cache])

    useEffect(()=>{
        console.log(cache)
    }, [cache])

    return (
        <div className="news">
            <Nav />
            <Banner text={"News"}/>
            {cache[0]?cache.map((item, index)=><Articles key={index} data={item}/>):null}
        </div>
    )
}