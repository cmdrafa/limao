import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

    renderPostList() {
        if (!this.props.posts) {
            return (
                <h3>Loading ...</h3>
            );
        }
        return this.props.posts.reverse().map((post) => {
            return (
                <Item key={post._id}>
                    <Item.Image src={`${process.env.PUBLIC_URL}/media/posts/${post.imageurl}`} />
                    <Item.Content>
                        <Item.Header as={Link} to={`/posts/${post.url}`}>{post.title}</Item.Header>
                        <Item.Meta>{post.briefDesc} - {post.section}</Item.Meta>
                        <Item.Description>{post.body}</Item.Description>
                        <Item.Extra>{new Date(post.postDate).toLocaleString()}</Item.Extra>
                    </Item.Content>
                </Item >
            );
        });
    }

    render() {
        return (
            <Container>
                <h1 style={{ textAlign: 'center' }}>Categories</h1>
                <h2>The {this.props.match.params.cat} section </h2>
                <Item.Group divided>
                    {this.renderPostList()}
                </Item.Group>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

export default connect(mapStateToProps, { fetchByCat })(Categories);