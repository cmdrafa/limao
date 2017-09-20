import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';

class Login extends Component {
    handleFormSubmit = (formProps, history) => {
        // console.log("All props", this.props);
        this.props.signinUser(formProps, this.props.history)
    }
    
    renderAlert(){
        console.log(this.props)
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{maxWidth: '450px'}}>
                    <h2 className="ui blue image header">
                        <Icon name="sign in" size="large" />
                        <div className="content">
                            Login to your account
                    </div>
                    </h2>
                    <form onSubmit={handleSubmit(this.handleFormSubmit)} className="ui large form">
                        <div className="ui stacked segment">
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
                    {this.renderAlert()}
                    <div className="ui message">
                        New to us? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = (formProps) => {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email!';
    }

    if (!formProps.password) {
        errors.password = 'Password required!';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return {
        formValues: state.form.errors
    };
};

Login = connect(mapStateToProps, actions)(Login);

export default reduxForm({
    validate: validate,
    form: 'loginform'
})(Login);



