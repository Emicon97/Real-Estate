import styled from 'styled-components'

const Button = styled.button`
    background: white;
    cursor: pointer;
    font-size: 14px;
    margin: 4px;
    padding: 4px 10px;
    border: 2px solid #333;
    border-radius: 30px;
    &:hover {
        /* background-color: #333; */
        /* color: #fff; */
        /* background: linear-gradient(45deg, #A3278F 0%, #E52F50 100%); */
        border: 2px solid #E52F50;
    }
`

export default Button