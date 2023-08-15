import { Icon } from "@iconify/react"

export const Header = () =>{
    return(
        <header className="lms-header">
            <a href={`/`}><Icon icon="ep:back" />Back to Main Site</a>
            <Icon icon="gg:profile" width={40} height={40} />
        </header>
    )
}