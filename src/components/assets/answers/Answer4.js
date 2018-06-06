import React, { Component } from 'react'
import Container from './Container'
import Bloc from './answer2/Bloc'

class Answer4 extends Component {

  state = {
    good_answer:null
  }

  componentDidMount() {

    const scrollto = this.getOffset(document.querySelector('.answer-4'))
    const scrollStep = window.scrollY / 140,
    scrollInterval = setInterval(() => {
      if ( window.scrollY < scrollto.top ) {
        window.scrollBy( 0, scrollStep )
      }
      else clearInterval(scrollInterval)
    },15)

    setTimeout( () => {

      const answer_explication = document.querySelector('.answer-4 .answer-explication')
      if (answer_explication) {
        answer_explication.classList.add('appear')
      }

    }, 500)

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
    const { good_answer } = this.state

    return (

      <Container answer="4" player={player}>

        <Bloc
          classNameContainer='answer-explication'
          answer="4"
          bloc="1"
        />

      </Container>

    )

  }

}

export default Answer4;
