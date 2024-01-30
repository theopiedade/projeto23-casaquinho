import styled from "styled-components";

export default function CityShow(description){

    return(
        <Container>
            <h2>Previsão do tempo para...</h2>
            <h1>São Paulo</h1>
            <p>
                <h3>Latitude: 44.4°</h3>
                <h3>Longitude: 10.99°</h3>
            </p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
        margin-top: 10px;
        margin-bottom: 14px;
        color: #222;
        font-family: Poppins;
        font-size: 600%;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
    }
    h2 {
        color: #222;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
    }
    p {
        display: flex;
    }
    h3 {
        margin-right: 25px;
        color: #222;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 48px;
    }
`
