import { useState } from 'react'
import Logo from './components/logo'
import './App.css'
import styled from 'styled-components'
import SearchBar from './components/searchbar'
import Temperature from './components/temperature'
import SkyAndData from './components/skyanddata'
import CityShow from './components/cityshow'
import Blocks from './components/blocks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <LeftContainer>
        <LeftMiddle>
          <Logo/>
          <SearchBar/>
          <Temperature/>
          <SkyAndData/>
        </LeftMiddle>
      </LeftContainer>
      <RightContainer>
        <RightMiddle>
          <CityShow/>
          <Blocks/>
        </RightMiddle>
      </RightContainer>
    </Container>
  )
}

export default App

const Container = styled.div`
    display: flex;
    height: 1080px;
    width: 1800px;
    background: #EDEDED;
`
const LeftContainer = styled.div`
  display: flex;
  width: 650px;
  background: #FFFFFF;
`
const LeftMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  height: 717px;
  margin-top: 176px;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 4px;
  background: #FFFFFF;
`

const RightContainer = styled.div`
  display: flex;
  width: 1258px;
  background: #EFEFEF;
`

const RightMiddle = styled.div`
  margin-top: 52px;
  margin-left: 50px;
`