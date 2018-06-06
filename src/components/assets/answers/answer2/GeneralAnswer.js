import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

class GeneralAnswer extends Component {

  render() {

    const { answer_text, classNameAnswerText } = this.props

    const Bloc = ({isVisible}) => {

      const classContainer = isVisible ? 'content-1 track-visibility' : 'content-1 track-visibility invisible'

      return (
        <div className={classContainer}>
          <img src={require('../../../../img/croix.svg')} alt="" className="croix"/>
          <img src={require('../../../../img/triangle.svg')} alt="" className="triangle"/>
          <p className={classNameAnswerText}>
            {answer_text}
          </p>
        </div>
      )

    }

      return (
        <TrackVisibility className="tracker">
          <Bloc />
        </TrackVisibility>
      )
    }

}

export default GeneralAnswer;
