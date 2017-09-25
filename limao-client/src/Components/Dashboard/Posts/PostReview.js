import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../Actions';

const PostReview = (props) => {
    console.log(props);

    return (
        <div>
            <h5>Please confirm your post</h5>
            <button onClick={props.onCancel}>Back</button>
            <button onClick={() => props.addPost(props.formValues, props.history)}> Submit Post</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        formValues: state.form.addPostForm.values
    };
};

export default connect(mapStateToProps, actions)(withRouter(PostReview));