import { useEffect } from "react"
import { Box } from "./sub-comp"

export const Banner = () =>{

    useEffect(()=>{
        console.log(<h1>Hello World!!!</h1>)
    }, [])

    return(
        <div className="home_banner">
            <Box>
                <h1>Hello World!!!</h1>
            </Box>
            <Box>
                <h1>Hello World!!!</h1>
            </Box>
            <Box>
                <h1>Hello World!!!</h1>
            </Box>
        </div>
    )
}