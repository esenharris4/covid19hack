import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Home from './views/Home';
import AppSocialTracker from './views/AppSocialTracker';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import {useStoreContext} from './context/reducers';

function App() {

  const { navState } = useStoreContext();
  
  return (
    <React.Fragment>
      <Navbar name="Profile"/>
      <div className="app-page">
        { navState === 'dashboard' &&
          <Dashboard />
        }
        { navState === 'profile' &&
          <Profile />
        }
        { navState === 'activity' &&
          <AppSocialTracker />
        }
        <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
              <div className="App">
              </div>
            )}/>
            <Route exact={true} path='/dashboard' render={() => (
              <div className="App">
                <Dashboard />
              </div>
            )}/>
          <Route exact={true} path='/profile' render={() => (
              <div className="App">
                <Profile />
              </div>
            )}/>
        </div>
      </BrowserRouter>
    </div>
  </React.Fragment>
  );
}

export default App;
// <Route exact={true} path='/profile' render={() => (
//        <div className="App">
//          <Profile />
//        </div>
//   )}/>
// <Route exact={true} path='/dashboard' render={() => (
//          <div className="App">
//            <Dashboard />
//          </div>
//     )}/>
