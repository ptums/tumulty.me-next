import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  /** Fonts **/
  @font-face {
    font-family: ${theme.fonts.lato};
    src: url('/fonts/Lato-Regular.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: ${theme.fonts.lato};
    src: url('/fonts/Lato-Italic.ttf');
    font-style: italic;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: ${theme.fonts.lato};
    src: url('/fonts/Lato-Bold.ttf');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: ${theme.fonts.playFairDisplay};
    font-weight: 500;
    src: url('/fonts/PlayfairDisplay-VariableFont_wght.ttf');
    font-display: swap;
  }

  
  html {
    background: url(images/tech-6.jpeg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: auto;
    font-family: ${theme.fonts.lato};
    font-size: 9px;
  }
  
  
  .page {
    background-color: ${theme.colors.whiteLowOpacity};
    border-radius: 16px;
    max-width: 1023px;
    margin: 16px auto;
    min-height: 95vh;
    box-shadow: ${theme.colors.extraLargeShadow};
  }
`

export default GlobalStyles