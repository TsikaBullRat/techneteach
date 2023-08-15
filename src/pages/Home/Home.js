import { Banner } from "./HomeBanner"
import { Services } from "./HomeServices"
import { About } from "./HomeAbout"
import { Nav } from "../"


export const Home = () =>{
    return (
        <div className="home_main">
            <Nav />
            <Banner />
            <About />
            <Services />
            <hr/>
        </div>
    )
}