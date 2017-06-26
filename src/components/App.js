import React from 'react'

import NavBar from './NavBar'
import PrioritiesList from './PrioritiesList'
import MyPrioritiesList from './MyPrioritiesList'
import MyPrioritiesStats from './MyPrioritiesStats'

const App = () => (
  <div>
    <NavBar />
    <div className="section">
      <div className="container">
        <MyPrioritiesStats />
        
        <div className="columns">
          <div className="column">
            <h5>Priorities</h5>
            <PrioritiesList />
          </div>

          <div className="column">
            <h5>My Priorities</h5>
            <MyPrioritiesList />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
