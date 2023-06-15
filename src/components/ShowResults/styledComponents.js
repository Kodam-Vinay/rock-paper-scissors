import styled from 'styled-components'

export const ShowResultsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`

export const EachPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImageElement = styled.img`
  height: 100px;
  width: 100px;
  max-width: 160px;
  flex-grow: 2;
  @media screen and (min-width: 768px) {
    height: 160px;
    width: 160px;
  }
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`
export const TextResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Result = styled.p`
  font-size: 26px;
  color: #ffffff;
  font-weight: 600;
`
export const PlayAgainButton = styled.button`
  font-family: 'Bree Serif';
  padding: 15px;
  border-radius: 10px;
  background-color: #ffffff;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`
