import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../Actions';

class Login extends Component {
    
    renderField = ({ input, label, name, type, meta: { touched, error } }) => {
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

    conditionalRedirect() {
        if (this.props.auth) {
            this.props.history.push('/');
        }
    }

    handleFormSubmit = (formProps, history) => {
        console.log("All props", this.props);
        this.props.signinUser(formProps, this.props.history)
    }

    renderAlert() {
        console.log(this.props)
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ maxWidth: '450px' }}>
                    <h2 className="ui blue image header">
                        <Icon name="sign in" size="large" />
                        <div className="content">
                            Login to your account
                    </div>
                    </h2>
                    <form onSubmit={handleSubmit(this.handleFormSubmit)} className="ui large form">
                        <div className="ui stacked segment">
                            <Field name="email" label="Email Address" component={this.renderField} 
                            type="text" placeholder="Email address" />
                            <Field name="password" label="Passowrd" component={this.renderField} 
                            type="password" placeholder="Your password" />
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
                {this.conditionalRedirect()}
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
        formValues: state.form.errors,
        auth: state.auth
    };
};

Login = connect(mapStateToProps, actions)(Login);

export default reduxForm({
    validate: validate,
    form: 'loginform'
})(Login);



