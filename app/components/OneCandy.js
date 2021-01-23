import React, { Component } from 'react'

const OneCandy = (props) => {
  console.log("PPP -> ", props.match.params.candyId)

  return (
    <div id="singleCandy">
    HIIIIIII {props.match.params.candyId}
        {/* <h1>{name}</h1>
      <p>{description}</p>
      <img src={imageUrl} id="candyImg" />
      <h3>Total: {quantity}</h3> */}
    </div>
  )
}

export default OneCandy
