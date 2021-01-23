const GOT_ONE_CANDY = 'GOT_ONE_CANDY'
import axios from 'axios'

const gotOneCandy = candy => ({
  type: GOT_ONE_CANDY,
  candy
})

export const getOneCandyThunk = (candyId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/candies/${candyId}`);
    console.log("Thunk Data ->  ", data)
    dispatch(gotOneCandy(data))
  } catch(err) {
    console.log(err.message)
  }
}

const oneCandyReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_ONE_CANDY:
      return action.candy
    default:
      return state
  }
}

export default oneCandyReducer
