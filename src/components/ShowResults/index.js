import {
  ShowResultsContainer,
  EachPickContainer,
  ImageElement,
  Paragraph,
  TextResultContainer,
  Result,
  PlayAgainButton,
} from './styledComponents'

const ShowResults = props => {
  const {pickedImage, randomImage, gameResult, isClickedPalyAgain} = props
  const onClickPlayAgain = () => {
    isClickedPalyAgain()
  }
  return (
    <>
      <ShowResultsContainer>
        <EachPickContainer>
          <Paragraph>YOU</Paragraph>
          <ImageElement src={pickedImage} alt="your choice" />
        </EachPickContainer>
        <EachPickContainer>
          <Paragraph>OPPONENT</Paragraph>
          <ImageElement src={randomImage} alt="opponent choice" />
        </EachPickContainer>
      </ShowResultsContainer>
      <TextResultContainer>
        <Result>{gameResult}</Result>
        <PlayAgainButton type="button" onClick={onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </TextResultContainer>
    </>
  )
}
export default ShowResults
