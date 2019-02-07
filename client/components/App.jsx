import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Header from './Header'
import Home from './Home'
import Proverb from './Proverb'
import PurposeList from './PurposeList';
import TopicsList from './TopicsList';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />

      <Route exact path = '/' component = {Home} />
      <Route path = '/topic' component = {TopicsList} />
      <Route path = '/purpose' component = {PurposeList} />
      <Route path = '/proverb/:id' component = {Proverb} />

    </div>
  )
}

export default App

