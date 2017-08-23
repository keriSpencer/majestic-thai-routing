import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/App.css'
import registerServiceWorker from './registerServiceWorker'
import BaseLayout from './components/BaseLayout'
// import '/Users/kerispencer/Development/react/majestic-thai-routing/src/images'
// import App from './components/App'

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//IMPORT COMPONENTS
import Menu from './components/Menu'
import Findus from './components/Findus'
import Email from './components/Email'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/findus" component={Findus} />
        <Route path="/email" component={Email} />
        <Route path="/" component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  /*
  SET UP ROUTING LOGIC HERE
  */
  document.getElementById('root')
)
registerServiceWorker()
