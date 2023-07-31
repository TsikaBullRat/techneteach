import { styled } from "styled-components"

export const Input = ({ data, label}) =>{
    return(
        <div className="input1">
            <label >{label}</label>
            <input className="simple-input1" onChange={text=>data(text.target.valuenpom)}/>
        </div>
    )
}