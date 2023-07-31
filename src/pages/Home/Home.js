import { Banner } from "./HomeBanner"
import { Learning } from "./HomeLearn"
import { About } from "./HomeAbout"
import { Store } from "./HomeStore"
import { Nav } from "../"


export const Home = () =>{
    return (
        <div className="home_main">
            <Nav />
            <Banner />
            <About />
            <Learning />
            <Store />
            <hr/>
        </div>
    )
}