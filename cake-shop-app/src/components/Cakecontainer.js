import React from 'react'
import PropTypes from 'prop-types'

class Cakecontainer extends React.Component {
  render () {
    return(
      <div>
          <h2>Number of Cakes</h2>
          <button>Buy cake</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numofcakes : state.numofcakes
  }
}

export default Cakecontainer;
