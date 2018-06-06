import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import Choices from './Choices'
import Container from './Container'

class Question2 extends Component {

  state = {
    active:null
  }

  showAnswer = (choice) => {
    const { showAnswer } = this.props

    let alreadyClicked = false

    document.querySelectorAll('.question-2 button').forEach( (btn) => {
      if (btn.classList.contains('active')) {
        alreadyClicked = true
      }
    })

    if (alreadyClicked === false) {
      this.setState({ active: choice })
      document.querySelector(`.question-2 button[data-choice="${choice}"]`).classList.add('active')
      setTimeout( () => {
        showAnswer(2, choice)
      }, 100)
    }

  }

  render() {

    const { player } = this.props
    const { active } = this.state

    return (

      <Container question="2" player={player}>

        <H2_DOM>
          Selon vous, pour quel événement ce stade est-il complet ?
        </H2_DOM>

        <img src={require('../../../img/stade.png')} alt=""/>

        <Choices question="2" goToAnswer={this.showAnswer} player={player} active={active} />

      </Container>

    )

  }

}

export default Question2;
