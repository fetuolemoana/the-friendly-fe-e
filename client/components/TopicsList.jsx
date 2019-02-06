import React from 'react'
import filters from '../data/filters'


const TopicsList = () => {
  return (
    <React.Fragment>
      <h1>the friendly fe'e topic list</h1>
      <ul>
        {filters.topic.map(function(top) {
          return <li>{top}</li>
        })
        }
      </ul>
    </React.Fragment>
  )
}

export default TopicsList