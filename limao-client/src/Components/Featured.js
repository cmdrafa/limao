import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Container } from 'semantic-ui-react';
import { fetchPosts } from '../Actions/';


class Featured extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }


    renderPostList() {
        //console.log(this.props);
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
                <h1 style={{ textAlign: 'center' }} >Featured content</h1>
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

export default connect(mapStateToProps, { fetchPosts })(Featured); 