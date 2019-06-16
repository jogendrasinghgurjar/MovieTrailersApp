import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Movie from '../Movie/Movie'
import Showfilms from '../Showfilms/Showfilms'
import Dropdown from '../Dropdown/Dropdown'

const Routes = () => (
  <Switch>
    <Route exact path='/' render={
      props => (<Showfilms currentPage='Home' category='home' {...props} />
    )} />
    <Route exact path='/upcoming' render={
      props => (<Showfilms currentPage='Up Coming' category='upcoming' {...props} />
    )} />
    <Route exact path='/nowplaying' render={
      props => (<Showfilms currentPage='Now Playing' category='now_playing' {...props} />
    )} />
    <Route exact path='/toprated' render={
      props => (<Showfilms currentPage='Top Rated' category='top_rated' {...props} />
    )} />
    <Route exact path='/search/:query' render={
      props => (<Showfilms currentPage='Search Results' {...props} />
    )} />
    <Route exact path='/language' render={
      props => (<Dropdown currentPage='Language' category='language' {...props} />
    )} />
    <Route exact path='/allGenres' render={
      props => (<Dropdown currentPage='All Genres' category='allGenres' {...props} />
    )} />
    <Route exact path='/movie/:id' component={Movie} />
  </Switch>
)

export default Routes
