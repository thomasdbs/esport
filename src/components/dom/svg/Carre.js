import React, { Component } from 'react'

class Carre extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{ fill: '#2daabf', fillRule: 'evenodd'}} width="52.44" height="52.94" viewBox="0 0 52.44 52.94">
      <path d="M1112.97,1881.5l-27.75-12.96a5.761,5.761,0,0,0-7.62,2.87l-13.26,28.42a5.747,5.747,0,0,0,2.69,7.67l27.75,12.96a5.761,5.761,0,0,0,7.62-2.87l13.26-28.42A5.747,5.747,0,0,0,1112.97,1881.5Zm-18.42,26.01-17.45-8.14,8.35-17.88,17.45,8.14Z" transform="translate(-1063.78 -1868.03)"/>
    </svg>


  )

}

}

export default Carre;
