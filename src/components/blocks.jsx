import styled from "styled-components";

export default function Blocks(){

    return(
        <Container>
           <box>
                <h1>Mínima</h1>
                <h2>24ºC</h2>
           </box>
           <box>
                <h1>Máxima</h1>
                <h2>37ºC</h2>
           </box>
           <box>
                <h1>Umidade</h1>
                <h2>65%</h2>
           </box>
           <box>
                <h1>Vento</h1>
                <h2>12 m/s</h2>
           </box>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 3%;
        
        width: 30%;
        height: 100%;
        flex-shrink: 0;
        border-radius: 10%;
        background: linear-gradient(117deg, #4D4494 22.83%, #4F43AE 90.03%);
        box-shadow: 0px 20% 40% 0px rgba(49, 79, 124, 0.08);

        h1 {
            margin-top: 5%;
            color: #FFF;
            font-family: Poppins;
            font-size: 100%;
        }

        h2 {
            margin-top: 3%;
            color: #FFF;
            font-family: Poppins;
            font-size: 300%;
            font-style: normal;
            font-weight: 100%;
        }
    }
`