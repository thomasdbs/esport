import React, { Component } from 'react'
import Container from './Container'
import Bloc from './answer2/Bloc'

class Answer5 extends Component {

  state = {
    criteria:1
  }

  componentDidMount() {

    const scrollto = this.getOffset(document.querySelector('.answer-5'))
    const scrollStep = window.scrollY / 140,
    scrollInterval = setInterval(() => {
      if ( window.scrollY < scrollto.top ) {
        window.scrollBy( 0, scrollStep )
      }
      else clearInterval(scrollInterval)
    },15)


    setTimeout( () => {

      const answer_explication = document.querySelectorAll('.answer-5 .answer-explication')
      if (answer_explication) {
        answer_explication.forEach( (answer) =>{
          answer.classList.add('appear')
        })
      }

    }, 500)

    document.querySelector('.answer-5 .criteria .cube').classList.add('animation')
    document.querySelector(`.answer-5 .navbar-item[data-item="${this.state.criteria}"]`).classList.add('cube-animation')
    setTimeout( () => {
      document.querySelector(`.answer-5 .navbar-item[data-item="${this.state.criteria}"]`).classList.add('line-animation')
    }, 600)

  }

  updateCriteria = (criteria) => {
    this.setState({criteria})
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.criteria !== this.state.criteria) {
      setTimeout( () => {
        const criterias = document.querySelectorAll('.answer-5 .navbar-item')
        criterias.forEach( (c) => {
          if (c.classList.contains('cube-animation')) {
            c.classList.remove('cube-animation')
            c.classList.remove('line-animation')
          }else if (parseInt(c.dataset.item,10) === this.state.criteria) {
            c.classList.add('cube-animation')
            setTimeout( () => {
              c.classList.add('line-animation')
            }, 600)
          }
        })
      }, 200)
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
    const { criteria } = this.state

    return (

      <Container answer="5" player={player}>

        <Bloc
          classNameContainer='answer-explication'
          answer="5"
          bloc="1"
        />

        <Bloc
          classNameContainer='content-3'
          answer="5"
          bloc="2"
        />

        <Bloc
          classNameContainer=''
          answer="5"
          bloc="3"
        />

        <Bloc
          classNameContainer='content-3'
          answer="5"
          bloc="4"
        />

        <Bloc
          classNameContainer='answer-explication'
          answer="5"
          bloc="5"
        />

        <Bloc
          classNameContainer='answer-details'
          answer="5"
          bloc="6"
        />

        <div className='criterias'>
          <p>Choisissez un critère pour en savoir plus</p>
          <div className="navbar">
            <div onClick={() => this.updateCriteria(1)} className="navbar-item" data-item="1">
              <div className="cube" >
                <span>1</span>
              </div>
              <div className="title">
                <span>UNIVERSALITÉ</span>
              </div>
            </div>
            <div onClick={() => this.updateCriteria(2)} className="navbar-item" data-item="2">
              <div className="cube" >
                <span>2</span>
              </div>
              <div className="title">
                <span>IMAGE</span>
              </div>
            </div>
            <div onClick={() => this.updateCriteria(3)} className="navbar-item" data-item="3">
              <div className="cube" >
                <span>3</span>
              </div>
              <div className="title">
                <span>POPULARITÉ</span>
              </div>
            </div>
          </div>
        </div>

        <div className='criteria' data-criteria={criteria}>
          <div className="explication">
            <div className="cube">
              <span>{criteria}</span>
            </div>
            <p>{
              (criteria === 1) ?
              'L\'UNIVERSALITÉ'
              : (criteria === 2) ?
              'L\'IMAGE'
              :
              'LA POPULARITÉ'
            }</p>
            <p>Nombre de pratiquants, de fédérations actives, répartition par continent, etc.</p>
          </div>
          <div className="pictos">
            <div className="picto">
              <p className="number">2,4</p>
              <p>milliards de gamers</p>
            </div>
            <div className="picto">
              <p className="number">1</p>
              <p>fédération internationale,</p>
            </div>
            <div className="picto">
              <p>composée de </p>
              <p className="number">46 pays</p>
              <p>avec chacun sa propre fédération</p>
            </div>
          </div>
        </div>

        <Bloc
          classNameContainer='final-question'
          answer="5"
          bloc="7"
        />



      </Container>

    )

  }

}

export default Answer5;
