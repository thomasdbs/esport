import React, { Component } from 'react'
import Container from '../assets/Container'
import _link from '../dom/_link'
import h1 from '../dom/h1'

class NOT_FOUND extends Component {

  render() {

    return (

      <Container>
        <dom_h1 content="NOT FOUND" />
        <_link url="/" content="Go to home" />
      </Container>

    )

  }

}

export default NOT_FOUND;
