import React from 'react'
import { Link } from 'react-router-dom'

import filters from '../data/filters'

const filterList = Object.keys(filters)

const Nav = () => {
  return (
    <div>
      <h1>Nav</h1>
      <ul>
        <li><Link to = '/'>home</Link></li>
        {
          filterList.map(function(filter, index) {
            return <li key={index}> <Link to={`/${filter}`}>{filter}</Link></li>
          })
        }
      </ul>

    </div>
  )
}

export default Nav