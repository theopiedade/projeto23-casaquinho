import styled from "styled-components";
import dayjs from "dayjs";

const weekDays=[
    "Domingo", 
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

const skyData=[
    { sky:"Clear", ceu:"Céu aberto", color:"orange" },
    { sky:"Clouds", ceu:"Nublado", color:"grey" },
    { sky:"Rain", ceu:"Chovendo", color:"blue"},
    { sky:"Snow", ceu:"Nevando", color:"lightgray"},
    { sky:"Thunderstorm", ceu:"Tempestade", color:"purple"},
    { sky:"Drizzle", ceu:"Chuviscando", color:"lightblue"},
    { sky:"Mist", ceu:"Neblina", color:"lightgray" }
]


export default function TemperatureAndSky({weather}){
    
    let ceu = ""
    let temperature = ""
    let color = ""

    if (weather.length != 0) {
        const check = weather.weather[0].main;
        const data = skyData.find(({ sky }) => sky === check)
        ceu = data.ceu;
        color = data.color;
        temperature = Math.floor(weather.main.temp - 273.15);
    }
  
    const data = dayjs(Date()).format('DD/MM/YYYY');
    const day = weekDays[dayjs().day()];
 
    return(
        <>
        <ContainerTemp color={color} >
            <ion-icon name="ellipse-sharp"></ion-icon>
            <h1>{temperature}</h1>
            <p>ºC</p>
        </ContainerTemp>

        <ContainerSky>
            <h1>{ceu}</h1>
            <h2></h2>
            <h3>{data}</h3>
            <h3>{day}</h3>
        </ContainerSky>
        </>
    )
}

const ContainerTemp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    margin-top: 20%;
    width: 100%;
    height: 100%;
    ion-icon {
        font-size: 400%;
        color: ${props => (props.color)};
        margin-right: 3%;
    }
    p {
        font-size: 400%;
        color: ${props => (props.color)};
        margin-bottom: 10%;     
    }   
    h1 {
        font-size: 900%;
        color: ${props => (props.color)};
 
`


const ContainerSky = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    font-family: Poppins;
    h1 {
        font-size: 32px;
        letter-spacing: 0em;
        color: #222222;
    }
    h2 {
        margin-top: 30%;
        margin-bottom: 30%;
        width: 210%;
        border: 3px solid #EDEDED;
    }
    h3 {
        font-size: 180%;
        color: #222222;
    }
`
