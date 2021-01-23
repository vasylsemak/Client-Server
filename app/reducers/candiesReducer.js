import axios from 'axios'
const GOT_CANDIES = 'GOT_CANDIES'

// Action Creators
const gotCandies = candies => ({
  type: GOT_CANDIES,
  candies
})

// Thunks
export const getAllCandies = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/candies')
    dispatch(gotCandies(data))
  } catch(err) {
    console.log(err.message)
  }
}


const candiesReducer = (state = [], action) => {
  switch(action.type) {
    case GOT_CANDIES:
      return action.candies
    default:
      return state
  }
}

export default candiesReducer
