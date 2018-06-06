import React, { Component } from 'react'
import Tour from '../../dom/svg/Tour'
import ASport from '../../dom/svg/ASport'
import NotASport from '../../dom/svg/NotASport'

class Choices extends Component {

  state = {
    animation:false,
    one:null,
    two:null,
    three:null,
    four:null
  }

  analizeChoices = () => {
    const { one, two, three, four } = this.state
    const { goToAnswer } = this.props

    const array = [one, two, three, four]
    if (this.HowMuchTimeInArray(array, 1) === 1 && this.HowMuchTimeInArray(array, 2) === 1 && this.HowMuchTimeInArray(array, 3) === 1 && this.HowMuchTimeInArray(array, 4) === 1) {
      goToAnswer(array)
    }else {
      alert('Vous ne pouvez pas attribuer la même position à deux joueurs')
    }
  }

  HowMuchTimeInArray = (array, what) => {
    return array.filter(item => item == what).length
  }

  componentWillMount() {
    const { one, two, three, four } = this.props
    if (one && two && three && four) {
      this.setState({ one, two, three, four })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { one, two, three, four, active } = this.props
    if (one && two && three && four) {
      this.setState({ one, two, three, four })
    }
  }

  selectChange = (input, e) => {
    e.preventDefault()
    switch (input) {
      case 1:
      this.setState({ one:e.target.value })
      break
      case 2:
      this.setState({ two:e.target.value })
      break
      case 3:
      this.setState({ three:e.target.value })
      break
      case 4:
      this.setState({ four:e.target.value })
      break
    }
  }

  render() {

    const { goToAnswer, question, active, selectChange } = this.props
    const { one, two, three, four } = this.state

    return (

      <div className="choice">
        {
          (question === '1') ?
          <div>
            <img onClick={() => goToAnswer(1)} data-choice="1" src={require('../../../img/Pacman.svg')} alt=""/>
          </div>
          : (question === '2') ?
          <div>
            <button className={ (active === 1) ? 'btn-anim active' : 'btn-anim'} onClick={() => goToAnswer(1)} data-choice="1">BASKETBALL</button>
          </div>
          : (question === '3') ?
          <div onClick={() => goToAnswer(1)} data-choice="1" className={ (active === 1) ? 'animation appear active' : 'animation appear'} >
            <Tour />
            <p>La population de la France</p>
            <p>68 MILLIONS</p>
          </div>
          : (question === '4') ?
          <div className={ (active === true) ? 'animation appear active' : ''}>
            <img src={require('../../../img/photo_ronaldo.png')} alt=""/>
            <p>CRISTIANO RONALDO</p>
            <span>FOOTBALLER</span>
            <select disabled={(active === true) ? true : false} className={(active === true) ? 'active' : 'not-active'} data-choice={one} onChange={(e) => this.selectChange(1, e)}>
              <option selected={(one === 1) ? true : false} value="1">1</option>
              <option selected={(one === 2) ? true : false} value="2">2</option>
              <option selected={(one === 3) ? true : false} value="3">3</option>
              <option selected={(one === 4) ? true : false} value="4">4</option>
            </select>
          </div>
          :
          <div onClick={() => goToAnswer(1)} data-choice="1" className={ (active === 1) ? 'animation appear active' : 'animation appear'} >
            <ASport />
            <p>OUI</p>
          </div>
        }
        {
          (question === '1') ?
          <div>
            <img data-choice="answer" src={require('../../../img/Manettes.svg')} alt=""/>
          </div>
          : (question === '2') ?
          <div>
            <button className={ (active === 2) ? 'btn-anim active' : 'btn-anim'} onClick={() => goToAnswer(2)} data-choice="2">E-SPORT</button>
          </div>
          : (question === '3') ?
          <div onClick={() => goToAnswer(2)} data-choice="2" className={ (active === 2) ? 'animation appear active' : 'animation appear'} >
            <Tour />
            <p>La population des Etats-Unis</p>
            <p>325 MILLIONS</p>
          </div>
          : (question === '4') ?
          <div className={ (active === true) ? 'animation appear active' : ''}>
            <img src={require('../../../img/photo_ninja.png')} alt=""/>
            <p>NINJA</p>
            <span>PRO-GAMER</span>
            <select disabled={(active === true) ? true : false} className={(active === true) ? 'active' : 'not-active'} data-choice={two} onChange={(e) => this.selectChange(2, e)}>
              <option selected={(two === 1) ? true : false} value="1">1</option>
              <option selected={(two === 2) ? true : false} value="2">2</option>
              <option selected={(two === 3) ? true : false} value="3">3</option>
              <option selected={(two === 4) ? true : false} value="4">4</option>
            </select>
          </div>
          :
          <div onClick={() => goToAnswer(2)} data-choice="2" className={ (active === 2) ? 'animation appear active' : 'animation appear'} >
            <NotASport />
            <p>NON</p>
          </div>
        }
        {
          (question === '1') ?
          <div>
            <img onClick={() => goToAnswer(2)} data-choice="2" src={require('../../../img/MegaMan.svg')} alt=""/>
          </div>
          : (question === '2') ?
          <div>
            <button className={ (active === 3) ? 'btn-anim active' : 'btn-anim'} onClick={() => goToAnswer(3)} data-choice="3">BOXE</button>
          </div>
          : (question === '3') ?
          <div onClick={() => goToAnswer(3)} data-choice="3" className={ (active === 3) ? 'animation appear active' : 'animation appear'} >
            <Tour />
            <p>La population de la Chine</p>
            <p>1,4 MILLIARDS</p>
          </div>
          : (question === '4') && (
          <div className={ (active === true) ? 'animation appear active' : ''}>
            <img src={require('../../../img/photo_riner.png')} alt=""/>
            <p>TEDDY RINER</p>
            <span>JUDOKA</span>
            <select disabled={(active === true) ? true : false} className={(active === true) ? 'active' : 'not-active'} data-choice={three} onChange={(e) => this.selectChange(3, e)}>
              <option selected={(three === 1) ? true : false} value="1">1</option>
              <option selected={(three === 2) ? true : false} value="2">2</option>
              <option selected={(three === 3) ? true : false} value="3">3</option>
              <option selected={(three === 4) ? true : false} value="4">4</option>
            </select>
          </div> )
        }

        {
          (question === '4') && (
            <div className={ (active === true) ? 'animation appear active' : ''}>
              <img src={require('../../../img/photo_tsonga.png')} alt=""/>
              <p>JO WILFRIED TSONGA</p>
              <span>TENNISMAN</span>

              <select disabled={(active === true) ? true : false} className={(active === true) ? 'active' : 'not-active'} data-choice={four} onChange={(e) => this.selectChange(4, e)}>
                <option selected={(four === 1) ? true : false} value="1">1</option>
                <option selected={(four === 2) ? true : false} value="2">2</option>
                <option selected={(four === 3) ? true : false} value="3">3</option>
                <option selected={(four === 4) ? true : false} value="4">4</option>
              </select>
            </div>
          )
        }

        {
          (question === '4') && (
            <div className={ (active === true) ? 'animation appear active submit' : 'submit'} onClick={() => this.analizeChoices()}>
              <button>VALIDER</button>
            </div>
          )
        }
      </div>

    )

  }

}

export default Choices;
