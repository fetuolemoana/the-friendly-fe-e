import React from 'react'
import filters from '../data/filters';

const PurposeList = () => {
  return (
    <React.Fragment>
      <h1>the friendly fe'e purpose list</h1>
      <p>
      <ul>
        {filters.purpose.map(function(pur) {
          return <li>{pur}</li>
        })
        }
      </ul>
      </p>
    </React.Fragment>
  )
}

export default PurposeList