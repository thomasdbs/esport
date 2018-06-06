import React, { Component } from 'react'
import { CheckVisibility } from '../CheckVisibility'
import TrackVisibility from 'react-on-screen'
import Container from './Container'
import GeneralAnswer from './answer2/GeneralAnswer'
import Bloc from './answer2/Bloc'

class Answer2 extends Component {

  state = {
    good_answer:null
  }

  componentWillMount() {

    const { complete_stadium } = this.props

    if (complete_stadium === 2) {
      this.setState({ good_answer:true })
    }else {
      this.setState({ good_answer:false })
    }

  }

  componentDidMount() {

    // document.querySelector('.answer-2').classList.add('appear-waiting')

    const scrollto = this.getOffset(document.querySelector('.answer-2 .answer-text'))

    // const pageHeight = document.body.scrollHeight - window.innerHeight

    const scrollStep = window.scrollY / 140,
    scrollInterval = setInterval(() => {

      if ( window.scrollY < scrollto.top-150 ) {

        window.scrollBy( 0, scrollStep )

      }

      else clearInterval(scrollInterval)

    },15)

    setTimeout( () => {
      document.querySelector('.answer-2 .answer-text').classList.add('appear')
    }, 500)

    setTimeout( () => {

      document.querySelectorAll('.answer-2 img').forEach((img) => {
        img.classList.add('appear')
      })

      const good_answer = document.querySelector('.answer-2 .good-answer')
      if (good_answer) {
        good_answer.classList.add('appear')
      }
      // document.querySelector('.answer-2').classList.remove('appear-waiting')


    }, 1300)

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gamers_in_world !== this.props.gamers_in_world) {
      document.querySelector('.answer-2 .answer-text').classList.add('appear')

      setTimeout( () => {

        document.querySelectorAll('.answer-2 img').forEach((img) => {
          img.classList.add('appear')
        })

        const good_answer = document.querySelector('.answer-2 .good-answer')
        if (good_answer) {
          good_answer.classList.add('appear')
        }

      }, 800)
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
    const { good_answer } = this.state

    return (

      <Container answer="2" player={player}>


        <Bloc
          answer_text={ (good_answer === true) ? 'BIEN JOUÉ' : 'PERDU'}
          classNameAnswerText={`answer-text answer-${good_answer}`}
          classNameContainer='content-1'
          answer="2"
          bloc="1"
        />


        {(good_answer === false) && (
          <Bloc
            classNameContainer='good-answer'
            answer="2"
            bloc="2"
          />
        )}

        <Bloc
          classNameContainer='content-2'
          answer="2"
          bloc="3"
        />

        <Bloc
          classNameContainer=''
          answer="2"
          bloc="4"
        />

        <Bloc
          classNameContainer='content-3'
          answer="2"
          bloc="5"
        />

        <Bloc
          classNameContainer='content-3'
          answer="2"
          bloc="6"
        />

        <Bloc
          classNameContainer='content-3 large'
          answer="2"
          bloc="7"
        />

      </Container>

    )

  }

}

export default Answer2;
