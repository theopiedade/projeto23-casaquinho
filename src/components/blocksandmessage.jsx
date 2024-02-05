import styled from "styled-components";

export default function BlocksAndMessage({weather}){

    let temp = ""
    let temp_min = ""
    let temp_max = ""
    let humidity = ""
    let wind = ""
    let msg = ""

    if (weather.coord) {
        temp = Math.floor(weather.main.temp - 273.15)
        temp_min = Math.floor(weather.main.temp_min - 273.15)
        temp_max = Math.floor(weather.main.temp_max - 273.15)
        humidity = weather.main.humidity
        wind = Math.floor(weather.wind.speed)

        if (temp < 17 || temp_min < 17 || temp_max < 17) 
        msg = "Você deve levar um casaquinho"
        else msg = "Não, você não deve levar um casaquinho"
    
    }

    return(
        <>
        <Container>
           <div>
                <h2>Mínima</h2>
                <h3>{temp_min}ºC</h3>
           </div>
           <div>
                <h2>Máxima</h2>
                <h3>{temp_max}ºC</h3>
           </div>
           <div>
                <h2>Umidade</h2>
                <h3>{humidity}%</h3>
           </div>
           <div>
                <h2>Vento</h2>
                <h3>{wind}m/s</h3>
           </div>
         </Container>
        <Message>
         <p>{msg}</p>
        </Message>
        </>
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
        box-shadow: 0% 20% 40% 0% rgba(49, 79, 124, 0.08);

        font-family: Poppins;
        
        h2 {
            margin-top: 5%;
            color: #FFF;
            font-size: 150%;
        }

        h3 {
            margin-top: 3%;
            color: #FFF;
            font-size: 300%;
            font-style: normal;
            font-weight: 100%;
        }
    }
`
const Message = styled.div`
    p {
        margin-top: 5%;
        font-size: 200%;
        font-style: italic;
        line-height: 5%;
    }
`