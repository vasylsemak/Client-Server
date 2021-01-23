import React from 'react'

const SingleCandy = ({ candy }) => {
  const { name, description, quantity, imageUrl } = candy;
  return (
    <div id="singleCandy">
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={imageUrl} id="candyImg" />
    </div>
  )
}

export default SingleCandy
