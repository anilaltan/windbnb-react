import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1250px;
    --white: #FFFFFF;
    --lightGrey: #BDBDBD;
    --medGrey: #828282;
    --black: #333333;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0;
    @media screen and (max-width: 1250px){
      margin: 0 12px;
    }
  }
`;
