import React from 'react'
import PropTypes from 'prop-types'
import {buyCake} from '../Redux'
import {connect} from 'react-redux'

function Cakecontainer (props){

    return(
      <div>
          <h2>Number of Cakes - {props.numOfCakes}</h2>
          <button onClick={props.buyCake}>Buy cake</button>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numofcakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cakecontainer);
