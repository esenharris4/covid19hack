import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Home from './views/Home';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact={true} path='/' render={() => (
           <div className="App">
             <Home />
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
