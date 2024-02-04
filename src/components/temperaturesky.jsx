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

    if (weather.length != 0) {
        const check = weather.weather[0].main;
        ceu = skyData.find(({ sky }) => sky === check).ceu;
        temperature = Math.floor(weather.main.temp - 273.15);
    }

    const data = dayjs(Date()).format('DD/MM/YYYY');
    const day = weekDays[dayjs().day()];
 
    return(
        <>
        <ContainerTemp>
            <ion-icon name="ellipse-sharp"></ion-icon>
            <h1>{temperature}</h1>
            <h2>ºC</h2>
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

const ContainerSky = styled.div`
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
const ContainerTemp = styled.div`
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
