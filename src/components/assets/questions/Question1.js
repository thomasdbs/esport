import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import { CheckVisibility } from '../CheckVisibility'
import Choices from './Choices'
import Container from './Container'

class Question1 extends Component {

  goToAnswer = (choice) => {

    const { showAnswer, player } = this.props

    if (player === null) {
      const dom_choice = document.querySelector(`.question-1 .choice img[data-choice="${choice}"]`)
      const dom_answer = document.querySelector(`.question-1 .choice img[data-choice="answer"]`)

      const translationX = this.getOffset(dom_answer).left - this.getOffset(dom_choice).left

      dom_choice.style.transform=`translateX(${translationX}px)`

      setTimeout( () => {
        dom_choice.style.transform=`translate(${translationX}px,200px)`
      }, 700)

      setTimeout( () => {
        showAnswer(1,choice)
      }, 1400)
    }

  }

 getOffset = ( el ) => {
    let _x = 0;
    let _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

  render() {

    const { player } = this.props


    return (

      <Container question="1" player={player}>

        <H2_DOM>
          <span>Avant de commencer,</span>
          CHOISIS TON CAMP
        </H2_DOM>

        <Choices question="1" goToAnswer={this.goToAnswer} player={player} />

      </Container>

    )

  }

}

export default Question1;
