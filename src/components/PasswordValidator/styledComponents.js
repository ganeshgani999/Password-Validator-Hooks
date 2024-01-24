// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
    height: 100vh;
    background-color:  #24263c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PasswordCardContainer = styled.div`
    height: 60vh;
    width: 40%;
    border-radius: 7px;
    background-color:  #383a4e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    color: #ffffff;
    font-weight: 500;
`
export const CardDescription = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: #ffffff;
`
export const Input = styled.input`
    height: 30px;
    width: 40%;
    margin-bottom: 0px;
`
export const PasswordErrorMsg = styled.p`
    font-family: 'Roboto';
    font-size: 10px;
    color: #ef4444;
    margin-top: 3px;
`