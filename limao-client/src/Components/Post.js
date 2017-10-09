import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Image, Menu, Icon } from 'semantic-ui-react';
import { fetchPostByUrl } from '../Actions';

class Post extends Component {
    componentDidMount() {
        this.props.fetchPostByUrl();
    }

    render() {
        if (!this.props.posts) {
            return (
                <Container>
                    Loading ....
                </Container>
            );
        }
        return (
            <Container>
                <Header as="h1">{this.props.posts[0].title}</Header>
                <Header as="h4">In {this.props.posts[0].section} </Header>
                <Header block as="h5">Posted on {new Date(this.props.posts[0].postDate).toLocaleString()}, by {this.props.posts[0].postedBy} </Header>
                <Image src={`${process.env.PUBLIC_URL}/media/posts/${this.props.posts[0].imageurl}`} centered size="large" />
                <div>
                    <Menu icon="labeled" vertical
                        style={{float: 'left', margin: '0em 3em 1em 0em'}}
                    >
                        <Menu.Header> Share this: </Menu.Header>
                        <Menu.Item>
                            <Icon name='twitter' />
                            Twitter
                        </Menu.Item>
                        <Menu.Item >
                            <Icon name='facebook' />
                            Share
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name='mail' />
                            Email
                        </Menu.Item>
                    </Menu>
                </div>
                <Container text>
                    <p> {this.props.posts[0].body} </p>
                </Container>
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