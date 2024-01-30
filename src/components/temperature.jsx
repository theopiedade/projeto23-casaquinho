import styled from "styled-components";

export default function Temperature(temp){

    return(
        <Container>
            <ion-icon name="ellipse-sharp"></ion-icon>
            <h1>31</h1>
            <h2>ºC</h2>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 20%;
    width: 550px;
    height: 120px;
    ion-icon {
        font-size: 400%;
        color: #EC6E4C;
        margin-right: 3%;
    }
    h1 {
        font-family: Poppins;
        font-size: 900%;
        color: #EC6E4C;
    }
    h2 {
        margin-bottom: 5%;
        font-family: Poppins;
        font-size: 600%;
        letter-spacing: 0em;
        text-align: left;
        color: #EC6E4C;      
    }    
`
