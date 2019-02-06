import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import Topics from './TopicsList'
import Muagagana from './PurposeList'
import Proverb from './Proverb'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />


      <Route exact path = '/' component = {Home} />
      <Route path = '/topics' component = {Topics} />
      <Route path = '/muagagana' component = {Muagagana} />
      <Route path = '/proverb/:id' component = {Proverb} />

    </div>
  )
}

export default App

