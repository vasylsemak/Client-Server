import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCandies } from '../reducers/candiesReducer'
import SingleCandy from './SingleCandy'

class AllCandiesComp extends Component {
  componentDidMount() {
    this.props.getCandies()
  }

  render() {
    return (
      <div className='allCandies'>
        {
          this.props.candies.map(candy => (
            <SingleCandy key={candy.id} candy={candy} />
          ))
        }
      </div>
    )
  }
}

const mapState = state => ({ candies: state.candies })
const mapDispatch = dispatch => ({
  getCandies: () => dispatch(getAllCandies())
})

const AllCandies = connect(mapState, mapDispatch)(AllCandiesComp)
export default AllCandies
