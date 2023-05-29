import createGlobalStyle from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    body{
        font-family: sans-serif;
        background-color: darkviolet;
        color: #fff;
    }
    html, body, #root{
        height: 100%;
    }
    button{
        cursor: pointer;
        background-color: black;
        border: none;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        font-weight: 700;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
`;