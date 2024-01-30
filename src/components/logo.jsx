import styled from "styled-components";
import casacoLogo from '../assets/casaco.svg'

export default function Logo(){

    return(
        <Container>
            <img src={casacoLogo} className="logo" alt="Casaco logo" />
            <h1>Levo um casaquinho?</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 70%;
    img {
        width: 60%;
        height: 60%;
    }
    h1 {
        margin-left: 3%; 
        margin-right: 40%;
        word-wrap: break-word;
        font-family: Poppins;
        font-size: 400%;
        font-weight: 600%;
        text-align: left;
    }    
`