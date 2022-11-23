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
    animation: fadeIn 2s;
    -webkit-animation: fadeIn 2s;
    -moz-animation: fadeIn 2s;
    -o-animation: fadeIn 2s;
    -ms-animation: fadeIn 2s;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default GlobalStyles
