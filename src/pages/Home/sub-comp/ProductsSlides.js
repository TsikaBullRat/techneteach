import { Dott } from "./Micro-CompDrive"
import { Product } from "./ProductSlide"

export const Options = ({products}) =>{
    
    return(
        <div className="mini-store">
            <div className="mini-store-contoler">
                <Dott/>
            </div>
            {products.map((item, index)=><Product key={index} data={item}/>)}
        </div>
    )
}