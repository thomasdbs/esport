import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'
import Siege from '../../../dom/svg/Siege'
import Cercle from '../../../dom/svg/Cercle'
import Carre from '../../../dom/svg/Carre'
import Chine from '../../../dom/svg/Chine'
import USA from '../../../dom/svg/USA'
import France from '../../../dom/svg/France'
import Heart from '../../../dom/svg/Heart'

class Bloc extends Component {

  state = {
    player:1
  }

  animateChairs = (number) => {

    const chairs = document.querySelectorAll(`div[data-chairs='${number}'] svg`)
    let timeOut = 0
    chairs.forEach( (chair) => {
      if (chair.classList.contains('animation') === false) {
        setTimeout( () => {
          chair.classList.add('animation')
        }, timeOut+=100)
      }
    })

  }

  animateHearts = (number) => {

    const chairs = document.querySelectorAll(`div[data-hearts='${number}'] svg`)
    let timeOut = 0
    chairs.forEach( (chair) => {
      if (chair.classList.contains('animation') === false) {
        setTimeout( () => {
          chair.classList.add('animation')
        }, timeOut+=100)
      }
    })

  }

  changePlayer = (number) => {
    this.setState({ player:number })


    // document.querySelector(`.answer-4 .players div[data-choice='${number}']`).classList.add('active')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.player !== this.state.player) {
      const divs = document.querySelectorAll('.answer-4 .players div')
      divs.forEach( (player) => {
        if (player.classList.contains('active')) {
          player.classList.remove('active')
        }
        if (player.dataset.choice == this.state.player) {
          player.classList.add('active')
        }
      })
    }
  }

  render() {

    const { answer_text, classNameAnswerText, classNameContainer, answer, bloc } = this.props
    const { player } = this.state

    const Content = ({isVisible}) => {

      const classContainer = isVisible ? `${classNameContainer} track-visibility` : `${classNameContainer} track-visibility invisible`

      switch (parseInt(answer, 10)) {
        case 2:

        switch (parseInt(bloc, 10)) {
          case 1:
          return (
            <div className={classContainer}>
              <img src={require('../../../../img/croix.svg')} alt="" className="croix"/>
              <img src={require('../../../../img/triangle.svg')} alt="" className="triangle"/>
              <p className={classNameAnswerText}>
                {answer_text}
              </p>
            </div>
          )
          break
          case 2:
          return (
            <div className={classContainer}>
              <p>Il s'agissait de </p>
              <p>LA FINALE DE L'ESL ONE 2017</p>
              <p>15 000 <sup>+</sup> spectateurs</p>
            </div>
          )
          break
          case 3:
          return (
            <div className={classContainer}>
              <div>
                <p>
                  <span>L’Electronic Sports League</span>, Ligue de sport électronique en français (ESL,) est une ligue pour les joueurs de sport électronique (aussi appelé eSport).
                </p>
              </div>
              <div>
                <p>
                  Il s’agit ici de la finale de l’ESL One 2017  à Cologne, au <span>Lanxess arena</span>. La compétition a duré <span>6 jours</span>, avec une moyenne de <span>15 000 spectateurs par jour.</span>
                </p>
              </div>
            </div>
          )
          break
          case 4:
          return (
            <p className={classContainer}>CELA REPRÉSENTE...</p>
          )
          break
          case 5:
          if (isVisible) {
            this.animateChairs(0)
          }
          return (
            <div className={classContainer}>
              <div data-chairs="0">
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />

              </div>
              <div>
                <p>48%</p>
                <p>de la capacité du stade La Beaujoire, à Nantes</p>
              </div>
            </div>
          )
          break
          case 6:

          if (isVisible) {
            this.animateChairs(1)
          }
          return (
            <div className={classContainer}>
              <div data-chairs="1">
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
                <Siege className="mute" />
              </div>
              <div>
                <p>89%</p>
                <p>de la capacité de l’Accor Hôtel Arena</p>
              </div>
            </div>
          )
          break
          case 7:
          if (isVisible) {
            this.animateChairs(2)
            setTimeout( () => {
              this.animateChairs(3)
            }, 3000)
          }
          return (
            <div className={classContainer}>
              <div>
                <div data-chairs="2">
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                </div>
                <div data-chairs="3">
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                  <Siege />
                </div>
              </div>
              <div>
                <p>200%</p>
                <p>de la capacité du Zénith de Nantes</p>
              </div>
            </div>
          )
          break
        }

        break

        case 3:

        switch (parseInt(bloc, 10)) {
          case 1:
          return (
            <div className={classContainer}>
              <Carre className="carre" />
              <Cercle className="cercle" />
              <p className={classNameAnswerText}>
                {answer_text}
              </p>
            </div>
          )
          break
          case 2:
          return (
            <div className={classContainer}>
              <p>2.4 milliards</p>
              <p>de joueurs dans le monde</p>
            </div>
          )
          break
          case 3:
          return (
            <p className={classContainer}>Cela correspond à l'addition du nombre d'habitants de</p>
          )
          break
          case 4:
          return (
            <div className={classContainer}>
              <div>
                <Chine/>
                <span>Chine</span>
              </div>
              <span>+</span>
              <div>
                <USA/>
                <span>USA</span>
              </div>
              <span>+</span>
              <div>
                <USA/>
                <span>USA</span>
              </div>
              <span>+</span>
              <div>
                <USA/>
                <span>USA</span>
              </div>
              <span>+</span>
              <div>
                <USA/>
                <span>USA</span>
              </div>
              <span>+</span>
              <div>
                <France/>
                <span>France</span>
              </div>
              <span>=</span>
              <p>
                2.4 milliards
                <br/>
                de personnes au total
              </p>
            </div>
          )
          break
        }

        break;

        case 4:

        switch (parseInt(bloc, 10)) {
          case 1:
          return (
            <div className={classContainer}>
              <p>Voici le classement correct : </p>
              <p>Nous avons pris en compte les revenus liés au salaire, aux revenus publicitaires et au merchandising, pour en faire une moyenne mensuelle, en se basant sur l’année 2017.</p>
              <div className="players">
                <div className={ (player === 1) ? 'active' : '' } data-choice="1" onClick={() => this.changePlayer(1)}>
                  <img src={require('../../../../img/photo_ronaldo.png')} alt=""/>
                  <select disabled data-choice="1">
                    <option selected value="1">1</option>
                  </select>
                </div>
                <div className={ (player === 2) ? 'active' : '' } data-choice="2" onClick={() => this.changePlayer(2)}>
                  <img src={require('../../../../img/photo_ninja.png')} alt=""/>
                  <select disabled data-choice="2">
                    <option selected value="2">2</option>
                  </select>
                </div>
                <div className={ (player === 3) ? 'active' : '' } data-choice="3" onClick={() => this.changePlayer(3)}>
                  <img src={require('../../../../img/photo_riner.png')} alt=""/>
                  <select disabled data-choice="3">
                    <option selected value="3">3</option>
                  </select>
                </div>
                <div className={ (player === 4) ? 'active' : '' } data-choice="4" onClick={() => this.changePlayer(4)}>
                  <img src={require('../../../../img/photo_tsonga.png')} alt=""/>
                  <select disabled data-choice="4">
                    <option selected value="4">4</option>
                  </select>
                </div>
              </div>
              <div className="player">

                <div className="picture-container">
                  {
                    (player === 1) ?
                    <img src={require('../../../../img/photo_ronaldo.png')} alt=""/>
                    : (player === 2) ?
                    <img src={require('../../../../img/photo_ninja.png')} alt=""/>
                    : (player === 3) ?
                    <img src={require('../../../../img/photo_riner.png')} alt=""/>
                    :
                    <img src={require('../../../../img/photo_tsonga.png')} alt=""/>
                  }
                  <select disabled data-choice={player}>
                    <option selected value={player}>{player}</option>
                  </select>
                </div>
                <div>
                  <p>
                    {
                      (player === 1) ?
                      'C.RONALDO'
                      : (player === 2) ?
                      'TYLER "NINJA" BLEVINS'
                      : (player === 3) ?
                      'TEDDY RINER'
                      :
                      'JO WILFRIED TSONGA'
                    }
                  </p>
                  <p>
                    {
                      (player === 1) ?
                      '7,8M €'
                      : (player === 2) ?
                      '500 000'
                      : (player === 3) ?
                      '450 000'
                      :
                      '130 000'
                    }
                    <sup>/MOIS</sup></p>
                    <p>
                      {
                        (player === 1) ?
                        'Cristiano Ronaldo, attaquant du Réal Madrid et champion d\'Europe 2016 avec le Portugal. La star mondiale de football touche près de 32M € par an.'
                        : (player === 2) ?
                        'Pro-gamer sur les jeux Halo, Player Unknown : Battleground et surtout Fortnite. En mars 2018 il a dépassé le record d’audience sur Twitch en faisant un live sur Fortnite avec le rappeur Drake (pic à 635 000 viewers uniques).'
                        : (player === 3) ?
                        'Le célèbre judoka français, détenteur d\'un record de dix titres de champion du monde, champion olympique à Londres en 2012 et à Rio de Janeiro en 2016, médaillé de bronze à Pékin en 2008, quintuple champion d\'Europe.'
                        :
                        'Le joueur de tennis professionel français et membre de l’équipe de France. Il est détenteur de 16 titres en simple.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            )
            break;

          }

          break;

          case 5:

          switch (parseInt(bloc, 10)) {
            case 1:
            return (
              <div className={classContainer}>
                <p>Selon une étude,</p>
                <p>(menée sur un échantillon de gamers résidants  dans l’un de ces pays :
                  états-Unis, Grande-Bretagne,  France, Allemagne.)</p>
                </div>
              )
              break
              case 2:
              if (isVisible) {
                this.animateHearts(0)
                setTimeout( () => {
                  this.animateHearts(1)
                }, 3800)
              }
              return (
                <div className={classContainer}>
                  <div>
                    <div data-hearts="0">
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                    </div>
                    <div>
                      <p>53%</p>
                      <p>Considèrent l’e-sport comme un véritable sport</p>
                    </div>
                  </div>
                  <div>
                    <div data-hearts="1">
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                    </div>
                    <div>
                      <p>47%</p>
                      <p>Ne pensent pas que l’e-sport soit un sport</p>
                    </div>
                  </div>

                </div>
              )
              break
              case 3:
              return (
                <p>Et, sur base du même échantillon,</p>
              )
              break
              case 4:
              if (isVisible) {
                this.animateHearts(2)
              }
              return (
                <div className={classContainer}>
                  <div>
                    <div data-hearts="2">
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />
                      <Heart />

                      <Heart />
                      <Heart />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />
                      <Heart className="mute" />

                    </div>
                    <div className="text-center">
                      <p>28%</p>
                      <p>Pensent que l’e-sport devrait être admis aux Jeux Olympiques</p>
                    </div>
                  </div>


                </div>
              )
              break
              case 5:
              return (
                <div className={classContainer} style={{ marginTop: '60px'}}>
                  <p style={{ fontSize:35 }} >Une question qui fait débat</p>
                  <p>On remarque que même parmi les gamers de ce sondage, la réponse ne semble pas encore évidente. Cependant, déjà près d’un tiers, estiment que l’e-sport aurait sa place aux Jeux Olympiques.</p>
                </div>
              )
              break

              case 6:
              return (
                <div className={classContainer}>
                  <p>Et vous,</p>
                  <p>L’e-sport aux jeux olympiques, ça vous paraît irrationnel ?</p>
                  <p>Pour le savoir, il faut commencer par regarder ce qui définit un sport selon le Comité d’organisation des Jeux Olympiques. Il existe 33 critères pris en compte pour l’étude d’une candidature. Nous en avons sélectionné 3 critères parmi les plus importants selon nous. </p>
                </div>
              )
              break
              case 7:
              return (
                <div className={classContainer}>
                  <p>
                    Au final,
                    <br/>
                    l’e-sport c’est un sport ?
                  </p>
                  <p>Le but de cette page n’était pas de vous donner une réponse tranchée sur le fait que l’e-sport soit un sport ou qu’il mérite sa place aux JO. Nous espérons vous avoir fait découvrir des données surprenantes sur l’e-sport et de vous forger votre propre avis sur l’e-sport.</p>
                  <div>
                    <Carre className="carre" />
                    <Cercle className="cercle" />
                    <p>
                      MERCI
                    </p>
                  </div>
                </div>
              )
              break

            }
            break
          }

        }

        return (
          <TrackVisibility className="tracker">
            <Content />
          </TrackVisibility>
        )
      }

    }

    export default Bloc;
