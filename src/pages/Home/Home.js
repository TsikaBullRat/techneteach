import { Banner } from "./HomeBanner"
import { Learning } from "./HomeLearn"

export const Home = () =>{
    return (
        <div className="home_main">
            <Banner/>
            <Learning/>
        </div>
    )
}