import React, { Component } from 'react'

class H1_DOM extends Component {

  render() {

    const { children } = this.props

    return (
      <h1 className="H1_DOM">
        {children}
      </h1>
    )

  }

}

export default H1_DOM;
