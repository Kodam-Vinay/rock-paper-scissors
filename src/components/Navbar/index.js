import {
  NavbarBgContainer,
  NavbarLogoContainer,
  EachParagraph,
  NavBarScoreResults,
  MainHeading,
  ScoreResult,
} from './styledComponents'

const Navbar = props => {
  const {score} = props
  return (
    <NavbarBgContainer>
      <NavbarLogoContainer>
        <MainHeading>Rock PAPER SCISSORS</MainHeading>
      </NavbarLogoContainer>
      <NavBarScoreResults>
        <EachParagraph score>Score</EachParagraph>
        <ScoreResult>{score}</ScoreResult>
      </NavBarScoreResults>
    </NavbarBgContainer>
  )
}
export default Navbar
