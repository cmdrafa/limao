import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { fetchPostByUrl } from '../Actions';

class Post extends Component {
    componentDidMount() {
        this.props.fetchPostByUrl();
    }

    render() {
        return (
            <Container>
                <h2> This is the post </h2>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { fetchPostByUrl })(Post);