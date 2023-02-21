import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle` 
  html {
    background: url(images/tech-6.webp) no-repeat center center fixed;
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
    margin: 16px;
    min-height: 95vh;
    box-shadow: ${theme.colors.extraLargeShadow};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    .page {
      margin: 16px auto;
    }
  }

  .fade-in {
    transition: opacity 1s ease;
}
.fade-out {
    opacity: 0;
    transition: opacity 1s ease;
}
`

export default GlobalStyles
