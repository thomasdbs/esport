import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

class GoodAnswer extends Component {

  render() {

    const Bloc = ({isVisible}) => {

      const classContainer = isVisible ? 'good-answer track-visibility' : 'good-answer track-visibility invisible'

      return (
        <div className={classContainer}>
          <p>Il s'agissait de </p>
          <p>LA FINALE DE L'ESL ONE 2017</p>
          <p>15 000 <sup>+</sup> spectateurs</p>
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

export default GoodAnswer;
