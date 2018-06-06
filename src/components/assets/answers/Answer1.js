import React, { Component } from 'react'
import { CheckVisibility } from '../CheckVisibility'
import Container from './Container'

class Answer1 extends Component {

  // componentDidUpdate() {
  //   const { isVisible } = this.props
  //   CheckVisibility('answer-1', isVisible)
  // }

  componentDidMount() {

    const { player } = this.props

    const question1 = document.querySelector('.question-1')
    question1.style.marginBottom='0'

    const choice = document.querySelector(`.question-1 .choice img[data-choice="${player}"]`)
    choice.classList.add('remove')

    const answer1 = document.querySelector('.answer-1')
    answer1.classList.add('appear-waiting')

    setTimeout( () => {
      answer1.classList.add('appear')
    }, 400)

    setTimeout( () => {
      choice.style.transform="translate(0,0)"
    }, 1100)

    setTimeout( () => {
      choice.classList.remove('remove')
      answer1.classList.remove('appear-waiting')
    }, 1800)

  }

  render() {

    const { player } = this.props

    return (

      <Container player={player} answer="1">

        <p className="player">
          Joueur {player}
        </p>

        <p className="go">
          C'EST PARTI !
        </p>

      </Container>

    )

  }

}

export default Answer1;
