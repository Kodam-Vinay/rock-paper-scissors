import {EachChoiceListItem, EachButton, EachImageItem} from './styledComponents'

const ChoiceListContainer = props => {
  const {choicesList, imageClicked} = props
  const {id, imageUrl} = choicesList
  const onClickImageButton = () => {
    imageClicked(id, imageUrl)
  }
  return (
    <EachChoiceListItem>
      <EachButton
        onClick={onClickImageButton}
        data-testid={
          (id === 'ROCK' ? 'rockButton' : null) ||
          (id === 'SCISSORS' ? 'scissorsButton ' : null) ||
          (id === 'PAPER' ? 'paperButton ' : null)
        }
      >
        <EachImageItem src={imageUrl} alt={id} />
      </EachButton>
    </EachChoiceListItem>
  )
}
export default ChoiceListContainer
