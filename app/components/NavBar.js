import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <Fragment>
    <nav>
      Goodie Bag
      <Link to='/' className='home-link'>Home</Link>
    </nav>
  </Fragment>
)

export default NavBar
