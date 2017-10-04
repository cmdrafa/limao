import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import PostForm from './Posts/PostForm';
import PostReview from './Posts/PostReview';

class DashboardAdd extends Component {
    constructor(props) {
        super(props);

        this.state = { showPostReview: false, file: [] };
        console.log(this.state);
    }

    renderContent() {
        //console.log(this.props);
        if (this.state.showPostReview) {
            return <PostReview onCancel={() => this.setState({ showPostReview: false })} />;
        }

        // Insert the file reader function here !!!
        return <PostForm onPostSubmit={() => this.setState({ showPostReview: true })} />;
    }


    render() {
        return (
            <div className="ui">
                {this.renderContent()}
            </div>
        );
    }
}


export default reduxForm({
    form: 'addPostForm'
})(DashboardAdd);