import { styled, css } from "styled-components"


export const IMG = styled.img``
export const NameTag = styled.h1``
export const Text = styled.p``
export const MemberCard = styled.div`
    width: 230px;
    height: 230px;
    background-color: #fff;
    margin: 0 50px;
    border-radius: 25px;
    transition: 1s;
    ${IMG}{
        width: 230px;
        height: 230px;
        border-radius: 25px;
        transition: 1s;
        background-color: #000
    }
    ${NameTag}{
        color:#7a6051;
        transition: 1s;
    }
    ${Text}{
        opacity: 0;
        color: #fff;
        transition: 1s;
    }
    &:hover{
        height: 300px;
        background-color: #7a6051;
    }
    &:hover ${IMG}{
        width: 100px;
        height: 100px;
        margin: 10px 10px;
        border-radius: 50px;
    }
    &:hover ${NameTag}{
        color: #fff;
        font-size: 15px;
        position: relative;
        top: -20px;
        left: 30px;
    }
    &:hover ${Text}{
        opacity: 1;
        width: 100px;
        position: relative;
        top: -20px;
        left: 30px;
        transition: 500ms;
        transition-delay: 0s; 
    }
`