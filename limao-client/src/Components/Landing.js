import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    renderContent() {
        if (this.props.auth) {
            return (
                <h1> Hello {this.props.auth.firstName}</h1>
                
            );
        }
        return(
            <h1> Hello, please login </h1>
        );
    }


    render() {
        return (
            <div className="container" style={{ textAlign: 'center' }} >
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(Landing);