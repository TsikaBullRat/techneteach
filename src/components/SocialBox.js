import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"

export const Socials = ({data}) =>{

    const [Component, setComponent ] = useState(null)

    const Generate = () =>{
        let generate = []

        if(data){
            if(data.web){
                generate = [...generate, <a key={0} href={data.web}><Icon icon="mdi:web" color="white" width="35" height="35" /></a>]
            }
            if(data.discord){
                generate = [...generate, <a key={1} href={data.discord}><Icon icon="ic:baseline-discord" color="white" width="35" height="35" /></a>]
            }
            if(data.facebook){
                generate = [...generate, <a key={2} href={data.facebook}><Icon icon="ri:facebook-fill" color="white" width="30" height="30" /></a>]
            }
            if(data.github){
                generate = [...generate, <a key={3} href={data.github}><Icon icon="teenyicons:github-solid" color="white" width="30" height="30" /></a>]
            }
            if(data.instagram){
                generate = [...generate, <a key={4} href={data.instagram}><Icon icon="mdi:instagram" color="white" width="30" height="30" /></a>]
            }
            if(data.reddit){
                generate = [...generate, <a key={5} href={data.reddit}><Icon icon="teenyicons:reddit-solid" color="white" width="30" height="30" /></a>]
            }
            if(data.snapchat){
                generate = [...generate, <a key={6} href={data.snapchat}><Icon icon="ri:snapchat-fill" color="white" width="30" height="30" /></a>]
            }
            if(data.telegram){
                generate = [...generate, <a key={7} href={data.telegram}><Icon icon="mingcute:telegram-fill" color="white" width="30" height="30" /></a>]
            }
            if(data.tiktok){
                generate = [...generate, <a key={8} href={data.tiktok}><Icon icon="ic:twotone-tiktok" color="white" width="30" height="30" /></a>]
            }
            if(data.twitch){
                generate = [...generate, <a key={9} href={data.twitch}><Icon icon="basil:twitch-solid" color="white" width="30" height="30" /></a>]
            }
            if(data.twitter){
                generate = [...generate, <a key={10} href={data.twitter}><Icon icon="ant-design:twitter-outlined" color="white" width="30" height="30" /></a>]
            }
            if(data.whatsapp){
                generate = [...generate, <a key={11} href={data.whatsapp}><Icon icon="ri:whatsapp-fill" color="white" width="30" height="30" /></a>]
            }
            if(data.youtube){
                generate = [...generate, <a key={12} href={data.youtube}><Icon icon="mingcute:youtube-fill" color="white" width="30" height="30" /></a>]
            }
        }

        let display = (<div className="social-box">{generate}</div>)

        return display
    }

    useEffect(()=>{
        setComponent(Generate())
    }, [])

    // useEffect(()=>{
    //     console.log(data)
    // }, [])

    useEffect(()=>{
        console.log(Component)
    }, [Component])

    return Component
}