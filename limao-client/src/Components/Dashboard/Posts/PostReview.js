import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Header, Image } from 'semantic-ui-react';

import * as actions from '../../../Actions';

class PostReview extends Component {
    constructor(props) {
        super(props);

        this.state = { imagepreview: '' };
    }

    componentDidMount() {
        let reader = new FileReader();
        let file = this.props.formValues.imageurl;

        reader.onloadend = () => {
            this.setState({
                imagepreview: reader.result
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        let { imagepreview } = this.state;

        return (
            <Container text>
                <Header as='h2'>{this.props.formValues.title}</Header>
                <Header as='h3'>Section: {this.props.formValues.section}</Header>
                <Header as='h3'>URL for the post: {this.props.formValues.url} </Header>
                <Image src={imagepreview} size="medium" />
                <p style={{ marginBottom: '10px' }} >{this.props.formValues.body}</p>
                <button className="ui left floated button negative" onClick={this.props.onCancel}>Back post</button>
                <button className="ui right floated button positive" onClick={() => this.props.addPost(this.props.formValues, this.props.history)}> Submit post </button>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form.addPostForm.values
    };
};

export default connect(mapStateToProps, actions)(withRouter(PostReview));