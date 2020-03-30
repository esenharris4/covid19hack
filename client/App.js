import React from 'react';
import './css/App.css';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Home from './views/Home';
import AppSocialTracker from './views/AppSocialTracker';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar name="Profile"/>
      <div className="app-page">
        <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
              <div className="App">
                <AppSocialTracker/>
              </div>
            )}/>
            <Route exact={true} path='/dashboard' render={() => (
              <div className="App">
                <Dashboard />
              </div>
            )}/>
          <Route exact={true} path='/profile' render={() => (
              <div className="App">
                <Dashboard />
              </div>
            )}/>
        </div>
      </BrowserRouter>
    </div>
  </React.Fragment>
  );
}

export default App;
