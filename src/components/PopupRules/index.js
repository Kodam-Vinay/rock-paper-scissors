import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupRulesContainer,
  PopupContainer,
  CloseButton,
  ImageElement,
  RulesButton,
} from './styledComponents'

const PopupRules = () => (
  <PopupRulesContainer>
    <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
      {close => (
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  </PopupRulesContainer>
)

export default PopupRules
