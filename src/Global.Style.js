import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-decoration: none;
    lyst-style: none;
    text-transform: capitalize;
    font-family: 'Kanit', sans-serif;

  }

  

  html{
    
    overflow-x: hidden;
    
    &::-webkit-scrollbar
      width: 1rem

    &::-webkit-scrollbar-track
      background: white

    &::-webkit-scrollbar-thumb
      background: green
  }

`

