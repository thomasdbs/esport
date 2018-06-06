import React, { Component } from 'react'

class Siege extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{ fill: '#51f2b0', fillRule: 'evenodd'}} viewBox="0 0 25 42.4">
      <path d="M25,24.8V23.2a.94.94,0,0,0-1-1h-.9V9.3A9.35,9.35,0,0,0,13.8,0H11.2A9.35,9.35,0,0,0,1.9,9.3V22.2H1a.94.94,0,0,0-1,1V26a3.33,3.33,0,0,0,3.3,3.3h8.2V40.4H2.9a1,1,0,1,0,0,2H22.3a1,1,0,0,0,0-2H13.5V29.3h8.2a3.23,3.23,0,0,0,3.2-2.6A13.05,13.05,0,0,0,25,24.8ZM3.9,9.3A7.34,7.34,0,0,1,11.2,2h2.6a7.34,7.34,0,0,1,7.3,7.3V22.2H3.9V9.3ZM23.1,26a1.32,1.32,0,0,1-1.3,1.3H3.3A1.32,1.32,0,0,1,2,26V24.2H23.1V26Z"/><circle cx="12.4" cy="9.2" r="1"/>
    </svg>


  )

}

}

export default Siege;
