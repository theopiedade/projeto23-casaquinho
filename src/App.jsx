import Logo from './components/logo'
import './App.css'
import styled from 'styled-components'
import SearchBar from './components/searchbar'
import Temperature from './components/temperature'
import SkyAndData from './components/skyanddata'
import CityShow from './components/cityshow'
import Blocks from './components/blocks'


function App() {

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
    margin-top: 1%;
    display: flex;
    height: 100%;
    width: 100%;
    background: #EDEDED;
`
const LeftContainer = styled.div`
  display: flex;
  width: 35%;
  background: #FFFFFF;
`
const LeftMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
  height: 68%;
  margin-top: 16%;
  margin-left: 8%;
  margin-right: 8%;
  background: #FFFFFF;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 66%;
  height: 100%;
  background: #EFEFEF;
`

const RightMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5%;
  margin-left: 5%;
  width: 70%;
  height: 100%;
`