import styled from 'styled-components'

export const EachChoiceListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
export const EachButton = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: 0;
  height: 100px;
  width: 100px;
  max-width: 160px;
  flex-grow: 2;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
`

export const EachImageItem = styled.img`
  width: 100%;
`
