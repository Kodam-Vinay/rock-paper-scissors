import styled from 'styled-components'

export const RockPaperScissorsContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ChoiceListContainer = styled.ul`
  list-style: none;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-shrink: 1;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const ResultsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
