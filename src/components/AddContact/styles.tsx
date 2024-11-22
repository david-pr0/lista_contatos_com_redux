import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
`

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 64px;
    border-radius: 32px;

    .save {
        background-color: green;
    }

    .cancel {
        background-color: red;
    }
`

export const Input = styled.input `
    padding: 32px;
    margin: 16px 0;
    border-radius: 16px;
    border: 1px solid #ccc;
    box-shadow: rgb(102, 150, 228) 2px 1px 2px;
`

export const Button = styled.button `
    display: block;
    padding: 16px 32px;
    border: none;
    border-radius: 16px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
`

export const Flex = styled.div `
    display: flex;
    gap: 32px;
`