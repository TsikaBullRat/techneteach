import { Icon } from "@iconify/react"

export const Socials = ({data}) =>{
    return(
        <div className="social-box">
            <a><Icon icon="mdi:web" color="white" width="35" height="35" /></a>
            <a><Icon icon="ic:baseline-discord" color="white" width="35" height="35" /></a>
            <a><Icon icon="ri:facebook-fill" color="white" width="30" height="30" /></a>
        </div>
    )
}