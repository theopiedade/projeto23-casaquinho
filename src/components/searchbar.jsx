import styled from "styled-components";
import search from '../assets/search.svg'
import { useState } from "react"

export default function SearchBar(){

    const [form, setForm] = useState("")

    function searchCity(e) {
        e.preventDefault()

        alert("Busca: "+form);

        /*
        axios.post(`${process.env.REACT_APP_API_URL}/search`, form)
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
                value={form}
                onChange={(e) => setForm(e.target.value)} required
            />
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    width: 500px;
    height: 80px;
    margin-top: 50px;
    
    background: #EDEDEF;
    border-radius: 24px;
    box-shadow: 0px 24px 48px 0px #314F7C14;
    img {
        width: 37px;
        height: 40px;
        border-radius: 16px;        
    }
    input {
      width: 302px;
      height: 30px;
      font-family: Montserrat;
      font-size: 30px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
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