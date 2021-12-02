import styled from "styled-components";

export const ProductCardContainer = styled.section`
    width: 90%;
    height: 100%;
    margin: 120px auto 0;
    padding: 10px;
    border: transparent;
    border-radius: 10px;
    box-shadow: 0px 0px 25px -2px var(--shadow-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media only screen and (min-width: 800px) {
        max-width: 800px;
    }
`;