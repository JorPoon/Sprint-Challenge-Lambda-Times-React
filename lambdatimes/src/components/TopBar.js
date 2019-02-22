import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Top = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`

const Left = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`
const Lspan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
margin-left: 10%
`
const Cspan = styled.span`
cursor: pointer;
margin-right: 5%;

:hover {
  text-decoration: underline;
}
`

const Right = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`

const Rspan = styled.span`
cursor: pointer;
`

const TopBar = () => {
  return (
    <Top>
      <Container>
        <Left>
          <Lspan>TOPICS</Lspan><Lspan>SEARCH</Lspan>
        </Left>
        <Center>
          <Cspan>GENERAL</Cspan><Cspan>BROWNBAG</Cspan><Cspan>RANDOM</Cspan><Cspan>MUSIC</Cspan><Cspan>ANNOUNCEMENTS</Cspan>
        </Center>
        <Right>
          <Rspan>LOG IN</Rspan>
        </Right>
      </Container>
    </Top>
  )
}

export default TopBar;