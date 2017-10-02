import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByCat } from '../Actions';


class Categories extends Component {
    componentDidMount() {
        this.props.fetchByCat();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.cat !== nextProps.match.params.cat) {
            this.props.fetchByCat();
            this.setState({ posts: nextProps.post });
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Categories</h1>
                <h2>You are in the {this.props.match.params.cat} section </h2>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { fetchByCat })(Categories);