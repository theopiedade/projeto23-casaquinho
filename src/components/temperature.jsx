import styled from "styled-components";

export default function Temperature(temp){

    return(
        <>
        <Container>
            <ion-icon name="ellipse-sharp"></ion-icon>
            <h1>31</h1>
            <h2>ºC</h2>
        </Container>
        Teste
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 75px;
    width: 550px;
    height: 120px;
    ion-icon {
        font-size: 90px;
        color: #EC6E4C;
        margin-right: 30px;
    }
    h1 {
        font-family: Poppins;
        font-size: 150px;
        font-weight: 150;
        line-height: 48px;
        color: #EC6E4C;
    }
    h2 {
        margin-bottom: 40px;
        font-family: Poppins;
        font-size: 120px;
        font-weight: 300;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color: #EC6E4C;      
    }    
`
