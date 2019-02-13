import React from 'react'
import { Link } from 'react-router-dom'

import filters from '../data/filters'

const filterList = Object.keys(filters)

const Nav = () => {
  return (
    <div>
      <h1>* navigate *</h1>
      <ul className="navList">
        <li><h2><Link to = '/'>home</Link></h2></li>
        {
          filterList.map(function(filter, index) {
            return <li key={index}> <h2><Link to={`/${filter}`}>{filter}</Link></h2></li>
          })
        }
      </ul>

    </div>
  )
}

export default Nav