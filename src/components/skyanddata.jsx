import styled from "styled-components";

export default function SkyAndData(description){

    return(
        <Container>
            <h1>Céu aberto</h1>
            <h2></h2>
            <h3>16/11/2023</h3>
            <h3>Quinta-Feira</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
    h1 {
        font-family: Poppins;
        font-size: 32px;
        font-weight: 400;
        line-height: 48px;
        letter-spacing: 0em;
        color: #222222;
    }
    h2 {
        margin-top: 35px;
        margin-bottom: 35px;
        width: 395px;
        border: 3px solid #EDEDED;
    }
    h3 {
        font-family: Poppins;
        font-size: 24px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        color: #222222;
    }
`
