import styled from "styled-components";

export default function Blocks(){

    return(
        <Container>
           <div>
                <h2>Mínima</h2>
                <h3>24ºC</h3>
           </div>
           <div>
                <h2>Máxima</h2>
                <h3>37ºC</h3>
           </div>
           <div>
                <h2>Umidade</h2>
                <h3>65%</h3>
           </div>
           <div>
                <h2>Vento</h2>
                <h3>12 m/s</h3>
           </div>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 3%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    div {
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

        h2 {
            margin-top: 5%;
            color: #FFF;
            font-family: Poppins;
            font-size: 100%;
        }

        h3 {
            margin-top: 3%;
            color: #FFF;
            font-family: Poppins;
            font-size: 300%;
            font-style: normal;
            font-weight: 100%;
        }
    }
`