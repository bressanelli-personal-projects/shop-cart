import styled from "styled-components";

export const HeaderBody = styled.header`
    width: 100%;
    height: 50px;
    background-color: var(--header-color);
    position: fixed;
    top: 0;
    z-index: 2;

    nav {
        height: 100%;       
    }

    ul {
        display: flex;
        justify-content: space-between; 
        height: 100% ;
        align-items: center;
    }

    li {        
        font-size: 20px;
        font-variant: small-caps;
        background-color: var(--header-color);
        width: 130px;
        padding: 10px;
        height: 100%;
        text-align: center;
        

        > a {
            color: var(--main-font-color);
            
        }

        :hover {
            filter: brightness(1.5);
        }
    }
`;

export const MainTitle = styled.h1`    
    padding: 10px 0;
    text-align: center;
    text-shadow: -1px 6px 16px var(--title-text-shadow-color);
    background: #fff4f4;
    background: linear-gradient(270deg,#fff4f4 0%, #a8a8a8 80%);
    background: -webkit-linear-gradient(270deg,#fff4f4 0%, #a8a8a8 80%);
    background: -moz-linear-gradient(270deg,#fff4f4 0%, #a8a8a8 80%);
`;

export const CartContentQty = styled.p`
    width: 20px;
    background-color: var(--cart-quatity-color);
    border-radius: 50px;
    position: absolute;
    right: 90px;
    top: 5px;
    color: var(--header-color);
    text-align: center;
`;