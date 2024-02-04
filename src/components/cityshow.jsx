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
    div {
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
