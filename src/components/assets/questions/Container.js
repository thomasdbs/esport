import React, { Component } from 'react'
import H2_DOM from '../../dom/h2'
import TrackVisibility from 'react-on-screen'

class Container extends Component {

  render() {

    const { children, player, question } = this.props

    let className = `step question question-${question}`

    if (player) {
      className += ` player-${player}`
    }

    const Bloc = ({isVisible}) => {

      if (isVisible) {
          className = className.split(' invisible')[0]
      }else {
          className += ' invisible'
      }

      return (
        <div className={className}>
          {children}
        </div>
      )
    }

    return (

      <TrackVisibility offset={300}>
        <Bloc />
      </TrackVisibility>

    )

  }

}

export default Container;
