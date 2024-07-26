import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`

    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        outline: none;
        font-family: 'Poppins', sans-serif;
    }

    button,a{
        cursor: pointer;
    }
`;

export default globalStyles;
