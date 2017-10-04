import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';

class SignUp extends Component {
    renderFields = ({ input, label, name, type, meta: { touched, error } }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <div className="ui left icon input">
                    <Icon name="user" />
                    <input {...input} name={name} type={type} style={{ marginBottom: '5px' }} />
                </div>
                <div className="ui red" style={{ marginBottom: '20px', color: 'red' }} >
                    <div className="header">
                        {touched && error && <span className="error">{error}</span>}
                    </div>
                </div>
            </div>
        )
    }

    renderAlert() {
        //console.log(this.props);
        if (this.props.formerror) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.formerror}
                </div>
            )
        }
    }



    handleFormSubmit = (formProps, history) => {
        //console.log(formProps, this.props.history);
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
                            <Field name="firstName" type="text" label="First Name" placeholder="First Name"
                                component={this.renderFields} />
                            <Field name="lastName" type="text" label="Last Name" placeholder="Last Name"
                                component={this.renderFields} />
                            <Field name="email" type="text" label="Email Address" placeholder="Email address"
                                component={this.renderFields} />
                            <Field name="password" type="password" label="Password" placeholder="Your password"
                                component={this.renderFields} />
                            <Field name="passwordConfirm" type="password" label="Confirm Password" placeholder="Confirm password"
                                component={this.renderFields} />
                        </div>
                        <div>
                            {this.renderAlert()}
                            <button className="fluid ui button blue" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.firstName) {
        errors.firstName = 'Please enter a First name'
    }

    if (!formProps.lastName) {
        errors.lastName = 'Please enter a Last name'
    }

    if (!formProps.email) {
        errors.email = 'Please enter an email'
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password'
    }

    if(formProps.passwordConfirm !== formProps.password){
        errors.password = 'Passwords must match'
    }

    return errors;
}

const mapStateToProps = (state) => {
    return {
        formerror: state.form.errors
    };
};

SignUp = connect(mapStateToProps, actions)(SignUp);

export default reduxForm({
    form: 'signupform',
    validate
})(SignUp);