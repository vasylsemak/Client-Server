import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOneCandyThunk } from '../reducers/oneCandy-reducer'

class OneCandyComp extends Component {
  componentDidMount() {
    this.props.getCandy(this.props.match.params.candyId)
  }

  render () {
    const { name, description, imageUrl, quantity } = this.props.candy

    return (
      <div id="singleCandy">
        <h1>{name}</h1>
          <p>{description}</p>
          <img src={imageUrl} id="candyImg" />
        <h3>Total: {quantity}</h3>
      </div>
    )
  }
}

const mapState = state => ({
  candy: state.oneCandy
})

const mapDispatch = dispatch => ({
  getCandy: (id) => dispatch(getOneCandyThunk(id))
})


const OneCandy = connect(mapState, mapDispatch)(OneCandyComp)
export default OneCandy
