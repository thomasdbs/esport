import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import Choices from './Choices'
import Container from './Container'

class Question3 extends Component {

  state = {
    animation:false,
    active:null
  }

  detectBottom = () => {

    const pageHeight = document.body.scrollHeight - window.innerHeight
    const scrollStep = window.scrollY

    if (scrollStep >= pageHeight-300 && this.state.animation === false) {
      this.setState({animation:true})
      this.animateChoices()
    }

  }

  animateChoices = () => {

    let timeoutAppear = 0

    const choices = document.querySelectorAll('.question-3 .choice div')
    choices.forEach( (c) => {

      setTimeout( () => {
        c.classList.add('appear')
      }, timeoutAppear+=800)

    })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.detectBottom)
  }

  showAnswer = (choice) => {

    const { showAnswer } = this.props

    let alreadyClicked = false

    document.querySelectorAll('.question-3 div').forEach( (btn) => {
      if (btn.classList.contains('active')) {
        alreadyClicked = true
      }
    })

    if (alreadyClicked === false) {
      this.setState({ active: choice })
      document.querySelector(`.question-3 div[data-choice="${choice}"]`).classList.add('active')
      showAnswer(3, choice)
    }

  }

  render() {

    const { player, showAnswer } = this.props
    const { active } = this.state

    return (

      <Container question="3" player={player}>

        <H2_DOM>
          COMBIEN Y A-T-IL DE GAMERS DANS LE MONDE <sup>*</sup> ?
        </H2_DOM>

        <p>Choisissez le nombre qui s’en rapproche le plus, selon vous.</p>

        <p className="small">*Représente les joueurs de jeux vidéos, sur toutes les plateformes (PC / consoles / mobile)</p>

        <Choices question="3" goToAnswer={this.showAnswer} active={active} />

      </Container>

    )

  }

}

export default Question3;
