import styled from "styled-components";


export const ProductContainer = styled.div`
    width: 320px;
    border: 1px solid var(--shadow-color);
    padding: 10px;
    margin: 10px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px 0px var(--shadow-color);
    }

    @media only screen and (min-width: 400px) {
        width: 300px;
    }

    @media only screen and (min-width: 800px) {
        width: 40%;
    }

`;

export const ProductCard = styled.div`    
    height: 250px;    
    border-radius: 4px;
    text-align: center;
    margin: 10px 0;
    
    h3 {
        margin: 5px 0;
    }
`;

export const ImageContainer = styled.div`
   
    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        
    }
`;

export const ButtonAddProduct = styled.button`
    font-size: 24px;
    color: var(--main-font-color);
    width: 100px;
    padding: 10px;
    background-color: var(--button-color);    
    border: 1px solid transparent;

    &:hover {
        color: var(--button-add-color);
        border: 1px solid var(--button-add-color);;;
    }

    &:active {
        filter: brightness(1.5);
    }
    
`;

export const ButtonDelProduct = styled(ButtonAddProduct)`
    &:hover {
        color: var(--button-remove-color);
        border: 1px solid var(--button-remove-color);;
    }
`;
