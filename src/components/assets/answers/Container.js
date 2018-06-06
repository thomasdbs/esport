import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import TrackVisibility from 'react-on-screen'

class Container extends Component {

  render() {

    const { children, player, answer } = this.props

    let className = `step answer answer-${answer}`

    if (player) {
      className += ` player-${player}`
    }

    const Bloc = ({isVisible}) => {

      const step = document.querySelector(`.step.answer.answer-${answer}`)

      if (step) {
        if (isVisible) {
          const appeared = step.classList.contains('appear')
          className = className.split(' invisible')[0]
          if (appeared === false) {
            className += ' appear'
          }
        }else {
          className += ' invisible'
        }
      }


      return (
        <div className={className}>
          {children}
        </div>
      )
    }

    return (

      <TrackVisibility partialVisibility>
        <Bloc />
      </TrackVisibility>

    )

  }

}

export default Container;
