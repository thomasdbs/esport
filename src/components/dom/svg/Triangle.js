import React, { Component } from 'react'

class Triangle extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{ fill: '#e65a5a', fillRule: 'evenodd'}} width="50" height="50" viewBox="0 0 50 50">
      <path d="M416.7,4026.59l18.366,36.75a6.644,6.644,0,0,0,11.872,0l18.362-36.75a6.627,6.627,0,0,0-5.943-9.59H422.63A6.627,6.627,0,0,0,416.7,4026.59Zm31.932,3.67-7.637,15.28-7.637-15.28h15.274Z" transform="translate(-416 -4017)"/>
    </svg>


  )

}

}

export default Triangle;
