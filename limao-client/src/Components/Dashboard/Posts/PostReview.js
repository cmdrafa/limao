import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

import * as actions from '../../../Actions';

const PostReview = (props) => {
    console.log(props);

    return (
        <Container text>
            <Header as='h2'>{props.formValues.title}</Header>
            <Header as='h3'>Section: {props.formValues.section}</Header>
            <Header as='h3'>URL for the post: {props.formValues.url} </Header>
            <p style={{ marginBottom: '10px'}} >{props.formValues.body}</p>
            <button className="ui left floated button negative" onClick={props.onCancel}>Back post</button>
            <button className="ui right floated button positive" onClick={() => props.addPost(props.formValues, props.history)}> Submit post </button>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        formValues: state.form.addPostForm.values
    };
};

export default connect(mapStateToProps, actions)(withRouter(PostReview));