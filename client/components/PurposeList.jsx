import React from 'react'
import filters from '../data/filters';

const PurposeList = () => {
  return (
    <React.Fragment>
      <h1>the friendly fe'e purpose list</h1>
      <ul>
        {filters.purpose.map(function(pur) {
          return <li>{pur}</li>
        })
        }
      </ul>
    </React.Fragment>
  )
}

export default PurposeList