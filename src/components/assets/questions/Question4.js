import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import Choices from './Choices'
import Container from './Container'

class Question4 extends Component {

  state = {
    animation:false,
    active:null,
    one:1,
    two:2,
    three:3,
    four:4
  }

  selectChange = (input, select) => {
    select.preventDefault()
    switch (input) {
      case 1:
      this.setState({ one:select.target.value })
      break
      case 2:
      this.setState({ two:select.target.value })
      break
      case 3:
      this.setState({ three:select.target.value })
      break
      case 4:
      this.setState({ four:select.target.value })
      break
    }
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

    const choices = document.querySelectorAll('.question-4 .choice div')
    choices.forEach( (c) => {

      setTimeout( () => {
        c.classList.add('appear')
      }, timeoutAppear+=800)

    })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.detectBottom)
  }

  showAnswer = (array) => {

    const { showAnswer } = this.props

    let alreadyClicked = false

    document.querySelectorAll('.question-4 select').forEach( (btn) => {
      if (btn.classList.contains('active')) {
        alreadyClicked = true
      }
    })

    if (alreadyClicked === false) {
      this.setState({active:true})
      showAnswer(4, array)
    }

  }

  render() {

    const { player, showAnswer } = this.props
    const { active, one, two, three, four } = this.state

    return (

      <Container question="4" player={player}>

        <H2_DOM>
          PARMI CES STARS,
          <br/>
          QUI A LE REVENU MENSUEL LE PLUS ÉLEVÉ ?
        </H2_DOM>

        <p>Établissez l'ordre qui vous semble correct.</p>

        <Choices question="4" active={active} goToAnswer={this.showAnswer} selectChange={this.selectChange} one={one} two={two} three={three} four={four} />


      </Container>

    )

  }

}

export default Question4;
