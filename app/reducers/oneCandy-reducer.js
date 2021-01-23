const GOT_ONE_CANDY = 'GOT_ONE_CANDY'

const gotOneCandy = candy => ({
  type: GOT_ONE_CANDY,
  candy
})

export const getOneCandyThunk = (candyId) => async (dispatch) => {
  try {
    const { data } = axios.get(`/api/candies/${candiId}`);
    console.log("Thunk Data ->  ", data)
    dispatch(gotOneCandy(data))
  } catch(err) {
    console.log(err.message)
  }
}

const oneCandyReducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_ONE_CANDY:
      return action.CANDY
    default:
      return state
  }
}

export default oneCandyReducer
