import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

import Container from '../assets/Container'
import Presentation from '../assets/Presentation'

import Question1 from '../assets/questions/Question1'
import Question2 from '../assets/questions/Question2'
import Question3 from '../assets/questions/Question3'
import Question4 from '../assets/questions/Question4'

import Answer1 from '../assets/answers/Answer1'
import Answer2 from '../assets/answers/Answer2'
import Answer3 from '../assets/answers/Answer3'
import Answer4 from '../assets/answers/Answer4'

class HOME extends Component {

  state = {
    step:0,
    player:null,
    complete_stadium:null,
    gamers_in_world:null,
    best_salary:null
  }

  componentWillMount() {
    // this.setState({
    //   step:1,
    //   player:1
    // })
    // this.setState({
    //   step:3,
    //   player:1,
    //   complete_stadium:1,
    //   gamers_in_world:2,
    // })
  }

  showAnswer = (question,choice) => {

    const { step } = this.state

    if (question > step) {

      switch (question) {

        case 1:
        this.setState({ player: choice })
        break;

        case 2:
        this.setState({ complete_stadium: choice })
        break;

        case 3:
        this.setState({ gamers_in_world: choice })
        break;

        case 4:
        this.setState({ best_salary: choice })
        break;

      }

      this.setState({ step:question })

    }

  }

  render() {

    const { step, player, complete_stadium, gamers_in_world, best_salary } = this.state

    return (

      <Container>

        <TrackVisibility offset={300}>
          <Presentation />
        </TrackVisibility>

        <Question1 showAnswer={this.showAnswer} player={player} />

        {(step >= 1) && (
          <Answer1 player={player} />
        )}

        {(step >= 1) && (
          <Question2 showAnswer={this.showAnswer} player={player} />
        )}

        {(step >= 2) && (
          <Answer2 player={player} complete_stadium={complete_stadium} gamers_in_world={gamers_in_world} />
        )}

        {(step >= 2) && (
          <Question3 showAnswer={this.showAnswer} player={player} gamers_in_world={gamers_in_world} />
        )}

        {(step >= 3) && (
          <Answer3 player={player} gamers_in_world={gamers_in_world} />
        )}

        {(step >= 3) && (
          <Question4 showAnswer={this.showAnswer} player={player} best_salary={best_salary} />
        )}

        {(step >= 4) && (
          <Answer4 player={player} best_salary={best_salary} />
        )}

      </Container>

    )

  }

}

export default HOME;
