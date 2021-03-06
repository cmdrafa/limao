import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './NavBar';
import Landing from './Landing';
import Login from './Login';
import SignUp from './Signup';
//import Dashboard from './Dashboard/Dashboard';
import DashboardNew from './Dashboard/DashboardNew';
import Featured from './Featured';
import Post from './Post';
import Categories from './Categories';
import * as actions from '../Actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <div className="container">
                            <Route exact={true} path="/" component={Landing} />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route path='/featured' component={Featured} />
                            <Route path='/categories/:cat' component={Categories} />
                            <Route path="/posts/:url" component={Post} />
                            <Route extact={true} path="/dashboard" component={DashboardNew} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
