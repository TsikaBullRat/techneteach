import { useState, useEffect } from "react"
import { Box } from "./sub-comp"
import { news } from "../"

export const Banner = () =>{

    const [ cache, setCache] = useState(null)
    const [ set, setSet ] = useState([1, 2, 0])
    const [ dial, setDial ] = useState(0)

    const Clean = async()=>{
        Select((await news).docs.map(item=>item.data()))
    }

    const Select = (data) =>{
        setCache(data.splice( 0, 3 ))
    }

    const Changer = (to) =>{
        switch(to){
            case 0:
                setSet([2, 0, 1])
                setDial(1)
                break
            case 0:
                setSet([0, 1, 2])
                setDial(2)
                break
            case 0:
                setSet([1, 2, 0])
                setDial(0)
                break
        }
    }

    useEffect(()=>{
        Clean()
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            Changer(dial)
            console.log("It's running")
        }, 10000)
    }, [dial])


    return(
        <div className="home_banner">
            {cache?(
                cache.map((item, index)=>(
                    <Box position={set[index]} key={index} select={Changer}>
                        <img src={item.picture} />
                        <h1>{item.headline}</h1>
                        <p>{item.story}</p>
                    </Box>
                ))
            ):null}
        </div>
    )
}