import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserPost } from '../../Actions/';
import { Card } from 'semantic-ui-react';

class DashboardMain extends Component {
    componentDidMount() {
        console.log(this.props);
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
        return this.props.posts.reverse().map((post) => {
            return (
                <Card key={post._id} fluid>
                    <Card.Content>
                        <Card.Header>{post.subject}</Card.Header>
                        <Card.Meta> Published On:
                            {new Date(post.postDate).toLocaleString()}
                        </Card.Meta>
                        <Card.Description>{post.body}</Card.Description>
                    </Card.Content>
                </Card>
            );
        });
    }


    render() {
        return (
            <div>
                {this.renderUserName()}
                <Card.Group>
                    {this.renderPosts()}
                </Card.Group>
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