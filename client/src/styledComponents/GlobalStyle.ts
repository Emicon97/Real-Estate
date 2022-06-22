import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
    }

    #root {
        margin: 0 auto;
    }

    body {
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }
`