import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './NavBar';
import Landing from './Landing';
import Login from './Login'


class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/login" component={Login} />
                    </div>
                </BrowserRouter>
            </div>


        /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
        );
    }
}

export default App;
