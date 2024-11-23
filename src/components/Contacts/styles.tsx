import styled from "styled-components";

export const Ul = styled.ul `
    list-style: none;
`

export const Li = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ccc;
    margin: 16px 0;
    padding: 8px;
    border-radius: 16px;
    box-shadow: rgb(102, 150, 228) 2px 1px 2px;

    .editar {
        background-color: #41db41;
    }

    .remover {
        background-color: red;
    }
`

export const Button = styled.button `
    padding: 8px 16px;
    border-radius: 16px;
    margin-right: 8px;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`

export const Input = styled.input `
    background-color: transparent;
    border: none;
    text-align: center;
    padding: 8px;
`