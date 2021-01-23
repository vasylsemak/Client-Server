import React from 'react'
import { HashRouter as Router, Route , Link } from 'react-router-dom'
import NavBar from './NavBar'
import AllCandies from './AllCandies'
import OneCandy from './OneCandy'

const Root = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route exact path='/' component={AllCandies} />
          <Route
            path='/candies/:candyId'
            render={(routeProps) => <OneCandy {...routeProps} />}
          />
        </main>
      </div>
    </Router>
  )
}

export default Root
