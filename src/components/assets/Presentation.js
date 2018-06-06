import React, { Component } from 'react'
import H1_DOM from '../dom/h1'
import Cercle from '../dom/svg/Cercle'
import Triangle from '../dom/svg/Triangle'
import Alien from '../dom/svg/Alien'
import Fantome from '../dom/svg/Fantome'
import Carre from '../dom/svg/Carre'
import { CheckVisibility } from './CheckVisibility'

class Presentation extends Component {

  state = {
    x: 0,
    y: 0
  }

  componentDidUpdate(prevProps,prevState) {

    const { isVisible } = this.props
    const { x,y } = this.state

    CheckVisibility('presentation', isVisible)

  }

  componentDidMount() {

    let timeOut = 0
    document.querySelectorAll('.presentation svg').forEach((svg) => {
      setTimeout( () => {
        svg.classList.add('animated')
      }, timeOut+=300)
    })

    window.addEventListener('mousemove', this.onMove)
  }

  onMove = (e) => {

    this.setState({ x: e.clientX, y: e.clientY })
    const fromTop = e.clientY - window.innerHeight / 2
    const fromLeft = e.clientX - window.innerWidth / 2
    const fromRight = (window.innerWidth - e.clientX) / 2

    const triangle1 = document.querySelector('.presentation svg.triangle-1')
    const triangle1X = fromRight/5+20
    const triangle1Y = fromTop/5+100
    if (triangle1X < 120) {
      triangle1.style.right=`${triangle1X}px`
    }
    triangle1.style.top=`${triangle1Y}px`

    const triangle2 = document.querySelector('.presentation svg.triangle-2')
    const triangle2X = fromLeft/5+100
    const triangle2Y = fromTop/2
    if (triangle2X < 150) {
      triangle2.style.left=`${triangle2X}px`
    }
    triangle2.style.bottom=`-${triangle2Y}px`

    const circle = document.querySelector('.presentation svg.circle')
    const circleX = fromLeft/4+20
    const circleY = fromTop/3+5

    if (circleX < 145) {
      circle.style.left=`${circleX}px`
    }
    circle.style.top=`${circleY}px`

    const alien = document.querySelector('.presentation svg.alien')
    const alienX = fromLeft/3.5
    const alienY = fromTop/2.5
    if (alienX < 100) {
      alien.style.left=`${alienX}px`
    }
    alien.style.top=`${alienY}px`

    const ghost = document.querySelector('.presentation svg.ghost')
    const ghostX = fromRight/3-80
    const ghostY = fromTop/3.5+50
    if (ghostX < 105) {
      ghost.style.right=`${ghostX}px`
    }
    ghost.style.top=`${ghostY}px`

    const carre = document.querySelector('.presentation svg.carre')
    const carreX = fromRight/3+20
    const carreY = fromTop/4+50
    if (carreX < 140) {
      carre.style.right=`${carreX}px`
    }
    carre.style.bottom=`-${carreY}px`
  }

  render() {

    return (

      <div className="step fullscreen presentation">

        <div>

          <Cercle className="circle" />
          <Triangle className="triangle-1" />

          <H1_DOM>
            L'E-SPORT EST-IL UN SPORT ?
          </H1_DOM>
        </div>

        <div>

          <Alien className="alien" />
          <Fantome className="ghost" />
          <Triangle className="triangle-2" />
          <Carre className="carre" />

          <p>
            L’e-sport (ou sport électronique) est représenté par la pratique des jeux vidéos en compétition. Il peut s’agir de compétitions en ligne ou dans des événements.
            <br/>
            <br/>
            Cette discinpline ne date pas d’hier puisqu’elle existait déjà au début des années 2000 avec les compétitions sur le jeu de combat Tekken, par exemple.
            <br/>
            <br/>
            Cependant, si nous en parlons aujourd’hui, ces parce que sa popularité a grandi massivement ces dernières années au point de lancer un débat sur l’apparition de l’e-sport aux Jeux Olympiques.
          </p>

        </div>

      </div>

    )

  }

}

export default Presentation;
