import { Product, Dott } from "./sub-comp"

//To be deleted
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

export const Store = () =>{
    return(
        <div className="mini-store">
            <div className="mini-store-contoler">
                <Dott/>
            </div>
            {products.map((item, index)=><Product key={index} data={item}/>)}
        </div>
    )
}