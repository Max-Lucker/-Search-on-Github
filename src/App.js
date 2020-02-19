import React from 'react';
import { Navbar } from './components/Navbar'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Profile } from './Pages/Profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Alert } from './components/Alert';
import { AlertState } from './context/Alert/alertState'
import { GithubState } from './context/github/githubState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />>
          <div className="container pt-4">
            <Alert alert={{text: 'test alert'}}/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
