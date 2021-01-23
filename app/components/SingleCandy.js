import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOneCandyThunk } from '../reducers/oneCandy-reducer'


const SingleCandy = ({ candy }) => {
  const { id, name, description, quantity, imageUrl } = candy;
  const dispatch = useDispatch()

  return (
    <div id="singleCandy">
      <Link
        to={`/candies/${id}`}
        onClick={() => dispatch(getOneCandyThunk(id))}
      >
        <h1>{name}</h1>
      </Link>
      <p>{description}</p>
      <img src={imageUrl} id="candyImg" />
      <h3>Total: {quantity}</h3>
    </div>
  )
}

export default SingleCandy
