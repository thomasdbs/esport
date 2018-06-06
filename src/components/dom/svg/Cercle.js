import React, { Component } from 'react'

class Cercle extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: '#2daabf', fillRule: 'evenodd'}} className={ (className) ? className : '' } width="51" height="51" viewBox="0 0 51 51">
      <path d="M360.5,1279a25.5,25.5,0,1,0,25.5,25.5A25.53,25.53,0,0,0,360.5,1279Zm0,37.57a12.065,12.065,0,1,1,12.052-12.07A12.071,12.071,0,0,1,360.5,1316.57Z" transform="translate(-335 -1279)"/>
    </svg>


  )

}

}

export default Cercle;
