import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import Routes from './Components/Routes/Routes'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    )
  }
}
