import styled from 'styled-components'

export const NavbarBgContainer = styled.nav`
  margin-top: 0px;
  height: 20vh;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: 'Bree Serif';
  @media screen and (min-width: 768px) {
    margin-top: 25px;
    width: 90%;
  }
`
export const NavbarLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

export const EachParagraph = styled.p`
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Roboto';
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const NavBarScoreResults = styled.div`
  background-color: #ffffff;
  width: 100px;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const MainHeading = styled.h1`
  width: 100px;
  color: #ffffff;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 0;
`
