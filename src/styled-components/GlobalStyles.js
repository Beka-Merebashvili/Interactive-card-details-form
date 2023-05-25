import { createGlobalStyle } from "styled-components";

const GlobalStayles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
}
body {
    background-color : #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`



export default GlobalStayles;