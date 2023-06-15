import {Component} from 'react'
import {
  RockPaperScissorsContainer,
  ChoiceListContainer,
  ResultsContainer,
} from './styledComponents'
import EachChoiceContainer from '../EachChoiceContainer'
import ShowResults from '../ShowResults'
import PopupRules from '../PopupRules'
import Navbar from '../Navbar'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    activeId: '',
    isButtonClicked: false,
    randomNum: '',
    pickedImage: '',
    randomImage: '',
    gameResult: '',
  }

  imageClicked = (id, imageUrl) => {
    this.generateRandomId()
    this.setState(
      {activeId: id, isButtonClicked: true, pickedImage: imageUrl},
      this.Results,
    )
  }

  isClickedPalyAgain = () => {
    this.setState({
      activeId: '',
      isButtonClicked: false,
      randomNum: '',
      pickedImage: '',
      randomImage: '',
      gameResult: '',
    })
  }

  Results = () => {
    const {activeId, randomNum} = this.state
    const randomId = choicesList[randomNum].id
    let gameResult = ''
    if (activeId === 'PAPER' && randomId === 'ROCK') {
      gameResult = 'YOU WON'
    } else if (activeId === 'SCISSORS' && randomId === 'ROCK') {
      gameResult = 'YOU LOSE'
    } else if (activeId === 'ROCK' && randomId === 'PAPER') {
      gameResult = 'YOU LOSE'
    } else if (activeId === 'SCISSORS' && randomId === 'PAPER') {
      gameResult = 'YOU WON'
    } else if (activeId === 'ROCK' && randomId === 'SCISSORS') {
      gameResult = 'YOU WON'
    } else if (activeId === 'PAPER' && randomId === 'SCISSORS') {
      gameResult = 'YOU LOSE'
    } else if (activeId === randomId) {
      gameResult = 'IT IS DRAW'
    }

    if (gameResult === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (gameResult === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
    this.setState({gameResult})
  }

  generateRandomId = () => {
    const randomNum = Math.floor(Math.random() * choicesList.length)
    this.setState({randomNum, randomImage: choicesList[randomNum].imageUrl})
  }

  render() {
    const {
      activeId,
      isButtonClicked,
      score,
      pickedImage,
      randomImage,
      gameResult,
    } = this.state
    return (
      <RockPaperScissorsContainer>
        <Navbar score={score} />
        {isButtonClicked ? (
          <ResultsContainer>
            <ShowResults
              pickedImage={pickedImage}
              randomImage={randomImage}
              gameResult={gameResult}
              isClickedPalyAgain={this.isClickedPalyAgain}
            />
          </ResultsContainer>
        ) : (
          <ChoiceListContainer>
            {choicesList.map(eacChoice => (
              <EachChoiceContainer
                choicesList={eacChoice}
                key={eacChoice.id}
                imageClicked={this.imageClicked}
                activeId={activeId}
              />
            ))}
          </ChoiceListContainer>
        )}

        <PopupRules />
      </RockPaperScissorsContainer>
    )
  }
}
export default RockPaperScissors
