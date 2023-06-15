import styled from 'styled-components'

export const PopupRulesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Bree Serif';
`
export const PopupContainer = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 500px;
    width: 500px;
    max-width: 600px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 20px;
  background-color: #ffffff;
  border-radius: 5px;
`
export const ImageElement = styled.img``

export const RulesButton = styled.button`
  height: 30px;
  width: 80px;
  align-self: flex-end;
  margin-top: auto;
  background-color: #ffffff;
  border: 0;
  border-radius: 5px;
  font-family: 'Bree Serif';
`
