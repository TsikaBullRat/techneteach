import { Segment, Slab } from "./sub-comp"

export const Learning = () =>{
    return(
        <>
            <Segment />
            <div className="home_learn">
                <div className="def-block-home-learn">
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
                    <Slab />
                    <Slab />
                    <Slab />
                    <Slab />
                    <Slab />
                </div>
            </div>
        </>
    )
}