import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    :root {
        --header-color: #274472;
        --button-color: #0C2D48;
        --button-add-color: #00ff00;
        --button-remove-color: #ff0000;
        --main-font-color: #fff;
        --shadow-color: #aaa;
        --title-text-shadow-color: rgba(128,125,125,1);
        --cart-quatity-color: #00ff00;
        --cart-product-description-alternate-color: #ccc;
    }
    
    body {    
        position: relative ;
        background: #f5f5f5;
        font-family: 'sans-serif';
        height: 100vh;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;