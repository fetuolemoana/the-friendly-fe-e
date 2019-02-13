import React from 'react'
import filters from '../data/filters'


const TopicsList = () => {
  return (
    <React.Fragment>
      <h1>navigate proverbs by topic</h1>
      <p>
      <ul>
        {filters.topic.map(function(top) {
          return <li>{top}</li>
        })
        }
      </ul>
      </p>
    </React.Fragment>
  )
}

export default TopicsList