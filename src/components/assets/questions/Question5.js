import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import Choices from './Choices'
import Container from './Container'

class Question5 extends Component {

  state = {
    active:null
  }


  showAnswer = (choice) => {

    const { showAnswer } = this.props

    let alreadyClicked = false

    document.querySelectorAll('.question-5 div').forEach( (btn) => {
      if (btn.classList.contains('active')) {
        alreadyClicked = true
      }
    })

    if (alreadyClicked === false) {
      this.setState({ active: choice })
      document.querySelector(`.question-5 div[data-choice="${choice}"]`).classList.add('active')
      showAnswer(5, choice)
    }

  }

  render() {

    const { player, showAnswer } = this.props
    const { active } = this.state

    return (

      <Container question="5" player={player}>

        <p>
          Définition du sport :
        </p>

        <p className="small">Le sport est un ensemble d'exercices physiques ou mentaux se pratiquant sous forme de jeux individuels ou collectifs pouvant donner lieu à des compétitions.</p>

        <H2_DOM>
          SELON VOUS, L'E-SPORT PEUT-IL ÊTRE CONSIDÉRÉ COMME UN SPORT ?
        </H2_DOM>

        <Choices question="5" goToAnswer={this.showAnswer} active={active} />

      </Container>

    )

  }

}

export default Question5;
