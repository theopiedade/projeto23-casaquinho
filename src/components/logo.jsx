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
    width: 550px;
    height: 120px;
    img {
        width: 100px;
        height: 100px;
        margin:0px;
    }
    h1 {
        height: 96px
        word-wrap: break-word;
        font-family: Poppins;
        font-size: 60px;
        font-weight: 600;
        line-height: 48px;
        text-align: left;
    }    
`