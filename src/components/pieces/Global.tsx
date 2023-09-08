import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @font-face {
        font-family: Montserrat-Bold;
        src: url('../../assets/font/Montserrat-Bold.ttf');
    }
    * {
        margin: 0;
        padding:0;
        box-sizing:border-box;
        font-family: Montserrat-Bold;
        background-color: #d2d2d2;
        height: 100vh;
    }
    
`;

export default Global;
