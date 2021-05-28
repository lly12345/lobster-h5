import React, { useState } from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import routes from '@/router'
import LobsterFestival from 'pages/LobsterFestival/pageEnroll'
// import Index from 'pages/LobsterFestival/cuxiao'
import Index from 'pages/LobsterFestival/test'
import ShopDetil from 'pages/LobsterFestival/shopDetail'
import './App.css'

function App() {
  return <Router>
    <>
      <Route exact path="/" component={LobsterFestival}></Route>
      <Route exact path="/index" component={Index}></Route>
      <Route exact path="/detail" component={ShopDetil}></Route>
    </>
  </Router>
}

export default App
