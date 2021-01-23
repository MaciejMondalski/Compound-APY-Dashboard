import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
    background: #F9FAFB;
		font-family: "Roboto", sans-serif;
		}
	
#ticker {
	width: 2rem;
	height: 2rem;
}

.main-container {
	display:flex;
	justify-content: center; 
	align-items: center;


}

.content-container {
	display:flex;
	flex-direction: column;
	width: 70vw;
	justify-content: center; 
	align-items: center;
}
	`;

export default GlobalStyles;
