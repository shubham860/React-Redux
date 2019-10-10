import React from 'react'
import PropTypes from 'prop-types'
import {buyCake} from '../redux'
import {connect} from 'rect-redux'
class Cakecontainer extends React.Component {
  render () {
    return(
      <div>
          <h2>Number of Cakes - {props.numofcakes}</h2>
          <button onClick={props.buyCake}>Buy cake</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    numofcakes : state.numofcakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake : ()=> dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
