import React, { Component } from 'react'

class H2_DOM extends Component {

  render() {

    const { children } = this.props

    return (
      <h2 className="H2_DOM">
        {children}
      </h2>
    )

  }

}

export default H2_DOM;
