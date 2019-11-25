import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Bands from './components/Bands.jsx'
import MenuHeader from './components/MenuHeader.jsx'
import Band1Page from './components/Band1Page.jsx'
import Band2Page from './components/Band2Page.jsx'
import Band3Page from './components/Band3Page.jsx'

const App = () => {
return (
<>

<BrowserRouter>
<MenuHeader></MenuHeader>
<Switch>
  <Route exact path="/" component={HomePage}></Route>
  <Route exact path="/:name" component={Bands}></Route>
</Switch>
</BrowserRouter>

</>
)
}

export default App
