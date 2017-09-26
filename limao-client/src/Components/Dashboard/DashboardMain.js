import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPost } from '../../Actions/';
import { Item } from 'semantic-ui-react';

class DashboardMain extends Component {
    componentDidMount() {
        //console.log(this.props.posts);
        this.props.fetchUserPost();
    }

    renderUserName() {
        return (
            <div style={{ textAlign: 'center' }} >
                <h1>
                    Hello {this.props.auth.firstName}
                </h1>
                <h2>Your recent posts</h2>
            </div>
        );
    }

    renderPosts() {
        console.log(this.props.posts);
        return this.props.posts.reverse().map((post) => {
            return (
                <Item key={post._id}>
                    <Item.Image src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" />
                    <Item.Content>
                        <Item.Header>{post.title}</Item.Header>
                        <Item.Meta>{post.briefDesc} - {post.section}</Item.Meta>
                        <Item.Description>{post.body}</Item.Description>
                        <Item.Extra>{new Date(post.postDate).toLocaleString()}</Item.Extra>
                    </Item.Content>
                </Item>
            );
        });
    }


    render() {
        return (
            <div>
                {this.renderUserName()}
                <Item.Group divided>
                    {this.renderPosts()}
                </Item.Group>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        posts: state.posts
    };
};


export default connect(mapStateToProps, { fetchUserPost })(DashboardMain);