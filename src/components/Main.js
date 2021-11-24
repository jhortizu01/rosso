import React from 'react'
import LandingPage from './LandingPageContainer'
import { Route } from 'react-router-dom'
import MusicContainer from './MusicContainer'
import CanvasContainer from './CanvasContainer'
import TheTeam from './TheTeam'

const Main = () => {
  return (
    <div>
      <Route exact path='/' render={() => <LandingPage />} />
      <Route exact path='/draw' render={() => <div><MusicContainer /><CanvasContainer /></div>} />
      <Route exact path='/theteam' render={() => <TheTeam />} />
    </div>
  )
}

export default Main