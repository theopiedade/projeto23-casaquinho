import styled from "styled-components";
import search from '../assets/search.svg'
import axios from "axios";
import { useState } from "react"



export default function SearchBar({setWeather}){
    const [city, setCity] = useState("")

    function searchCity({e}) {
        e.preventDefault()

        const url = import.meta.env.VITE_API_URL;
        const key = import.meta.env.VITE_API_KEY;
        const getURL = `${url}?q=${city}&appid=${key}`
          
        const promise = axios.get(getURL)
        promise.then((res) => {
                setWeather(res.data)
                alert(res.data)
            })
        promise.catch((err) => {
                alert("Erro: "+err.msg)
            })
 
    }

    return(
        <Container>
            <img src={search} className="logo" alt="search icon" />
            <form onSubmit={searchCity}>
            <input 
                placeholder="Procure por uma cidade" 
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)} required
            />
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;


    width: 100%;
    height: 10%;
    margin-top: 10%;
    margin-right: 20%;
    
    background: #EDEDEF;
    border-radius: 24px;
    box-shadow: 0px 24px 48px 0px #314F7C14;
    img {
        width: 10%;
        height: 50%;    
    }
    input {
      width: 90%;
      height: 30%;
      font-family: Montserrat;
      font-size: 130%;
      text-align: left;
      background: #EDEDEF;
      color: #424243;
      border: 3px;
      border-color: #EDEDEF;
    }
    input:focus {
        background: #EDEDEF;
        color: #424243;
        border: 3px;
        border-color: #EDEDEF;
      }
        
`