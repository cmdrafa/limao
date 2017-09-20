import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';

class SignUp extends Component {
    handleFormSubmit = (formProps, history) =>{
        this.props.signupUser(formProps, this.props.history)
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ maxWidth: '450px' }}>
                    <h2 className="ui blue image header">
                        <Icon name="signup" size="large" />
                        <div className="content">
                            Sign up for a account
                        </div>
                    </h2>
                    <form onSubmit={handleSubmit(this.handleFormSubmit)} className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <label>First Name</label>
                                <div className="ui left icon input">
                                    <Icon name="user" />
                                    <Field name="firstName" component="input" type="text" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label>Last Name</label>
                                <div className="ui left icon input">
                                    <Icon name="user" />
                                    <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <div className="ui left icon input">
                                    <Icon name="user" />
                                    <Field name="email" component="input" type="text" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <Icon name="lock" />
                                    <Field name="password" component="input" type="password" placeholder="Your password" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="fluid ui button blue" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formValues: state.form.errors
    };
};

SignUp = connect(mapStateToProps, actions)(SignUp);

export default reduxForm({
    form: 'signupform'
})(SignUp);