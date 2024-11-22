import styled from "styled-components";

export const StyledHeader = styled.header `
    padding: 32px 0;
    background-color: #ccc;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    form {
        width: 40vw;
    }
`

export const Input = styled.input `
    width: 100%;
    display: block;
    padding: 8px;
    border-radius: 16px;
    border: 1px solid #ccc;
`

export const Button = styled.button `
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #60cefa;
    border: none;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`