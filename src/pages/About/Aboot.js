import { Banner } from "./AboutBanner"
import { Heading } from "./AboutInfo"
import { Members } from "./AboutMembers"
import { Services } from "./AboutOffers"
import { Nav } from "../"

export const About = () =>{
    return (
        <div>
            <Nav />
            <Banner text={"About"} />
            <Heading />
            <Services />
            <Members />
        </div>
    )
}