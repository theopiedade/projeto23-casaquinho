import { useState } from 'react'
import Logo from './components/logo'
import './App.css'
import styled from 'styled-components'
import SearchBar from './components/searchbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <LeftContainer>
        <Logo/>
        <SearchBar/>
      </LeftContainer>
      <RightContainer/>
    </Container>
  )
}

export default App

const Container = styled.div`
    display: flex;
    align: center;
    margin-left: 0px;    
    height: 1080px;
    border: 4px;
    border-color: black;
    background: #EDEDED;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  height: 717px;
  margin-top: 176px;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 4px;
  border-color: black;
  background: #FFFFFF;
`
const RightContainer = styled.div`
  display: flex;
  width: 1258px;
  background: #D8D8D8;
`