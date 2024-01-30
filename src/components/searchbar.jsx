import styled from "styled-components";
import search from '../assets/search.svg'
import { useState } from "react"



export default function SearchBar(){


    const [city, setCity] = useState("")

    function searchCity(e) {
        e.preventDefault()


        console.log(process.env.API_URL)

        //let post = `${process.env.API_URL}?q=${city}&appid=${process.env.API_KEY}`
        alert("Busca: "+city);
        
     
        /*
        axios.post(post)
            .then(() => {

                navigate("/timeline")
            })
            .catch((err) => {

                alert("Houve um erro ao publicar seu link")
            })
        */
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