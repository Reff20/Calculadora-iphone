import styled from "styled-components";

export const Background = styled.div`
    height: 90vh;
    width: 100vw;
    background-color: #292929;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CalcAll = styled.div`
    background-color: red;
    width: 80vw;
    height: 90vh;
    min-height: 507px;
    max-width: 535px;
    border: 3px solid #FFFF;
    display: flex;
    flex-direction: column;
`

export const Display = styled.div`
    background-color: black;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 20%;
`

export const Result = styled.p`
    font-weight: 600;
    cursor: default;
    font-size: 60px;
    margin: 15px;
    color: white;
    text-align: center;
`

export const DivButtons = styled.div`
    display: grid;
    height: 80%;
    width: 100%;
    background-color: black;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`

export const ButtonsRight = styled.div`
    background-color: #fd831f;
    &:hover{
        background-color: #ca630e;
    }
    border: 10px solid black;
    display: flex;
    border-radius: 100px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-column-start: ${props => props.grid.colS};
    grid-column-end: ${props => props.grid.colE};
    grid-row-start: ${props => props.grid.rowS};
    grid-row-end: ${props => props.grid.rowE};
    cursor: pointer;
`

export const Numbers = styled.div`
    background-color: #424242;
    &:hover{
        background-color: #292929;
    }
    border: 10px solid black;
    display: flex;
    border-radius: 100px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-column-start: ${props => props.grid.colS};
    grid-column-end: ${props => props.grid.colE};
    grid-row-start: ${props => props.grid.rowS};
    grid-row-end: ${props => props.grid.rowE};
    cursor: pointer;
`

export const ButtonsUp = styled.div`
    background-color: #a3a3a3;
    &:hover{
        background-color: #777777;
    }
    border: 10px solid black;
    display: flex;
    border-radius: 100px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-column-start: ${props => props.grid.colS};
    grid-column-end: ${props => props.grid.colE};
    grid-row-start: ${props => props.grid.rowS};
    grid-row-end: ${props => props.grid.rowE};
    cursor: pointer;
`

export const Text = styled.p`
    font-weight: 600;
    font-size: 40px;
    color: ${props => props.color};
    text-align: center;
`