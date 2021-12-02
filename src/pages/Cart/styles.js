import styled from "styled-components";

export const MainContainer = styled.div`   
    flex-direction: row-reverse;
    flex-wrap: wrap;
    margin: 120px auto 0;
    `;


export const CartCard = styled.section`
    width: 90%;    
    margin: 50px auto 0px;
    padding: 10px;
    border: transparent;
    border-radius: 10px;
    box-shadow: ${(props) =>
        props.showShadow ? "0px 0px 25px -2px var(--shadow-color)" : null};        
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media only screen and (min-width: 400px) {
        max-width: 400px;
    }
        
    @media only screen and (min-width: 800px) {
        max-width: 800px;
    }
    `;

export const CartTotalCost = styled(CartCard)`
    width: 90%;        
    border: 1px solid #000;

@media only screen and (min-width: 800px) {
    width: 60%;
}   
`;

export const TotalPriceTitle = styled.h3`
    margin: 5px 10px;
`;

export const TotalPrice = styled.p`
    margin: 5px 0;
    font-size: 18px;
`;

export const TotalProductList = styled.div`
    width: 100%;
    text-align: left;
    font-size: 16px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;

    :nth-child(2n+1) {
        background-color: var(--cart-product-description-alternate-color);
    }
`;