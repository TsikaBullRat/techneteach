import { Icon } from "@iconify/react"

export const Nav = () =>{
    return(
        <header>

            <div className="namespace">
                <img height={60}/>
                <h1>Logo Here</h1>
            </div>

            <ul className="nav">
                <li><a href={`/`}>Home</a></li>
                <li><a href={`/about`}>About</a></li>
                <li><a href={`/news`}>News</a></li>
                <li><a href={`/contacts`}>Contacts</a></li>
                <li><a href={`/learning`}><Icon icon="gg:profile" color="white" /></a></li>
            </ul>

        </header>
    )
}