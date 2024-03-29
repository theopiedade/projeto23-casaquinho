import styled from "styled-components";

export default function CityShow({weather}){

    let name = ""
    let lat = ""
    let lon = ""

    if (weather.coord) {
        name = weather.name
        lat = weather.coord.lat.toFixed(2)+'º'
        lon = weather.coord.lon.toFixed(2)+'º'
    }
    return(
        <Container>
            <h2>Previsão do tempo para...</h2>
            <h1>{name}</h1>
            <div>
                <h3>Latitude: { lat }</h3>
                <h3>Longitude: { lon }</h3>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: Poppins;
    h1 {
        margin-top: 2%;
        margin-bottom: 2%;
        color: #222;
        font-size: 600%;
    }
    h2 {
        color: #222;
        font-size: 300%;
    }
    div {
        display: flex;
        margin-top:5%;
    }
    h3 {
        margin-right: 5%;
        color: #222;
        font-size: 150%;
    }
`
