import { Banner } from "./HomeBanner"
import { Learning } from "./HomeLearn"
import { Store } from "./HomeStore"
import { Programs } from "./HomePrograms"
import { About } from "./HomeAbout"

export const Home = () =>{
    return (
        <div className="home_main">
            <Banner />
            <Learning />
            <Store />
            <Programs />
            <About />
        </div>
    )
}