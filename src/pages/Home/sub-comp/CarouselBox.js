export const Box = ({children, position, select}) =>{
    return(
        <div 
            className={`carousel-box ${
                position===0?'prev':(
                position===1?'active':(
                position===2?'next':null
                ))
            }`}
            onClick={()=>select()} >
            {children}
        </div>
    )
}