import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <Link to='/'></Link>  
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Nav