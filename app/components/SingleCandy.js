import React from 'react'
import { Link } from 'react-router-dom'


const SingleCandy = ({ candy }) => {
  const { id, name, description, quantity, imageUrl } = candy;

  return (
    <div id="singleCandy">
      <Link to={`/candies/${id}`}>
        <h1>{name}</h1>
      </Link>
      <p>{description}</p>
      <img src={imageUrl} id="candyImg" />
      <h3>Total: {quantity}</h3>
    </div>
  )
}

export default SingleCandy
