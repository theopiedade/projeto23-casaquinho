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


export default function SkyAndData({weather}){
    
   
    function skyCheck() {
        const main = weather.weather.map(item => item.main)
        return skyData.find((sky === main))
    }

    if (weather.length > 0) {
        console.log(weather.weather.map(item => item.main))
    }

    const data = dayjs(Date()).format('DD/MM/YYYY');
    const day = weekDays[dayjs().day()];
 
    return(
        <Container>
            <h1>Céu Aberto</h1>
            <h2></h2>
            <h3>{data}</h3>
            <h3>{day}</h3>
        </Container>
    )
}

const Container = styled.div`
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
