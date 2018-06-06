import React, { Component } from 'react'
import Container from './Container'
import Bloc from './answer2/Bloc'

class Answer3 extends Component {

  state = {
    good_answer:null
  }

  componentWillMount() {

    const { gamers_in_world } = this.props

    if (gamers_in_world === 3) {
      this.setState({ good_answer:true })
    }else {
      this.setState({ good_answer:false })
    }

  }

  componentDidMount() {

    const scrollto = this.getOffset(document.querySelector('.answer-3'))
    const scrollStep = window.scrollY / 140,
    scrollInterval = setInterval(() => {
      if ( window.scrollY < scrollto.top-150 ) {
        window.scrollBy( 0, scrollStep )
      }
      else clearInterval(scrollInterval)
    },15)


    setTimeout( () => {
      document.querySelector('.answer-3 .answer-text').classList.add('appear')
    }, 500)

    setTimeout( () => {

      document.querySelectorAll('.answer-3 .content-1 svg').forEach((img) => {
        img.classList.add('appear')
      })

      const answer_explication = document.querySelector('.answer-3 .answer-explication')
      if (answer_explication) {
        answer_explication.classList.add('appear')
      }

    }, 1300)

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

      <Container answer="3" player={player}>


        <Bloc
          answer_text={ (good_answer === true) ? 'BIEN JOUÉ' : 'PERDU'}
          classNameAnswerText={`answer-text answer-${good_answer}`}
          classNameContainer='content-1'
          answer="3"
          bloc="1"
        />

        <Bloc
          classNameContainer='answer-explication'
          answer="3"
          bloc="2"
        />

        <Bloc
          classNameContainer=''
          answer="3"
          bloc="3"
        />

        <Bloc
          classNameContainer='content-2'
          answer="3"
          bloc="4"
        />

      </Container>

    )

  }

}

export default Answer3;
