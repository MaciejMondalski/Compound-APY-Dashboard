import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
    background: white;
		font-family: "Roboto", sans-serif;
		}
	
#ticker {
	width: 2rem;
	height: 2rem;
}

.main-container {
	display:flex;
	justify-content: center; 
	width: 100vw;

}

.content-container {

}
	`;

export default GlobalStyles;
