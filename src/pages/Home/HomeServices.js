import { useState } from "react"
import { Segment, Slab, Options } from "./sub-comp"

//to be deleted
const products = [
    {
        name: "Iphone",
        pictures: [
            require("../../res/Dummy Drive/d1.jpg"),
            require("../../res/Dummy Drive/d2.jpg"),
            require("../../res/Dummy Drive/d3.jpg")
        ],
        specs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Integer blandit lectus accumsan, auctor arcu ac, blandit lacus.",
            "Pellentesque non elit sed elit maximus pulvinar",
            "In molestie nulla non est sodales, congue lobortis eros pharetra.",
            "Sed sit amet dolor quis lectus commodo luctus sit amet sodales lectus.",
            "Mauris at ipsum vitae velit viverra semper eget sed sem."
        ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra porta quam, sed tempor risus imperdiet ut. In eget cursus justo, nec scelerisque nibh. Nullam eleifend pellentesque facilisis. Sed aliquam pellentesque neque, sit amet dictum lacus lobortis ac. Praesent suscipit, tellus eget faucibus iaculis, nunc est aliquet lectus, vitae feugiat purus mauris nec libero.",
    }]

    const courses = [
        {
            name: "Programming",
            pictures: [
                require("../../res/Dummy Drive/d1.jpg"),
                require("../../res/Dummy Drive/d2.jpg"),
                require("../../res/Dummy Drive/d3.jpg")
            ],
            topics: [
                "Lorem ipsum ",
                "Integer blandit",
                "Pellentesque",
                "In molestie",
                "Sed sit",
                "Mauris at"
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra porta quam, sed tempor risus imperdiet ut. In eget cursus justo, nec scelerisque nibh. Nullam eleifend pellentesque facilisis. Sed aliquam pellentesque neque, sit amet dictum lacus lobortis ac. Praesent suscipit, tellus eget faucibus iaculis, nunc est aliquet lectus, vitae feugiat purus mauris nec libero.",
        }]
    

export const Services = () =>{

    const [ trigger, setTrigger ] = useState()


    return(
       <>
            <Segment option={trigger} Change={setTrigger} />
            {trigger?(
                <>
                    <div className="home_services">
                        <div className="def-block-container">
                            <div className="def-block-home-services">
                                <h1>Check out these tools</h1>
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec aliquet libero. Nullam non ipsum vel sapien ornare euismod quis ut nibh. 
                                    Suspendisse ultricies est in sapien condimentum blandit. Praesent gravida a justo sed cursus. 
                                    Cras id nulla id magna facilisis ultrices et ac eros. Sed venenatis nisl dolor, eget ultricies elit egestas a. 
                                    Nunc pretium nisl nec lectus suscipit sodales. Cras erat libero, bibendum sit amet posuere vitae, vestibulum a augue. 
                                    Praesent laoreet iaculis tristique.
                                </h3>
                            </div>
                            <div className="list-block-home-learn">
                            </div>
                        </div>
                        <Options products={products}/>
                    </div>
                </>
            ):(
                <>
                    <div className="home_services">
                        <div className="def-block-container">
                            <div className="def-block-home-services">
                                <h1>Gain a new skill</h1>
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec aliquet libero. Nullam non ipsum vel sapien ornare euismod quis ut nibh. 
                                    Suspendisse ultricies est in sapien condimentum blandit. Praesent gravida a justo sed cursus. 
                                    Cras id nulla id magna facilisis ultrices et ac eros. Sed venenatis nisl dolor, eget ultricies elit egestas a. 
                                    Nunc pretium nisl nec lectus suscipit sodales. Cras erat libero, bibendum sit amet posuere vitae, vestibulum a augue. 
                                    Praesent laoreet iaculis tristique.
                                </h3>
                            </div>
                            <div className="list-block-home-learn">
                                {courses.map(( item, index )=>(
                                    <Slab key={index}>
                                        <h3>{item.name}</h3>
                                    </Slab>
                                ))}
                            </div>
                        </div>
                        <Options products={courses}/>
                    </div>
                </>
            )}
       </>
    )
}