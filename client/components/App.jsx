import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import Topics from './Topics'
import Muagagana from './Muagagana'
import Proverb from './Proverb'


const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Nav />

      <Route exact path = '/' component = {Home} />
      <Route path = '/topics' component = {Topics} />
      <Route path = '/muagagana' component = {Muagagana} />
      <Route path = '/proverb/:id' component = {Proverb} />

    </React.Fragment>
  )
}

export default App

