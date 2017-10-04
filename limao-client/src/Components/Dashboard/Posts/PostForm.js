import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from 'semantic-ui-react';

const adaptFileEventToValue = delegate =>
    e => delegate(e.target.files[0])

const FileInput = ({
input: {
  value: omitValue,
    onChange,
    onBlur,
    ...inputProps,
},
    meta: omitMeta,
    ...props,
}) =>
    <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...inputProps}
        {...props}
    />

class PostForm extends Component {
    renderMainFields = ({ input, label, name, type, meta: { touched, error } }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <div className="ui top input">
                    <input {...input} name={name} style={{ marginBottom: '10px' }} type={type} />
                </div>
            </div>
        )
    }

    renderBodyArea = ({ input, label, name, type, meta: { touched, error } }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <div className="ui top input">
                    <TextArea {...input} name={name} style={{ marginBottom: '10px' }} autoHeight placeholder="Post body" />
                </div>
            </div>
        );

    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onPostSubmit)} className="ui large form">
                    <Field name="title" type="text" label="Post Title" placeholder="Post Title"
                        component={this.renderMainFields} />
                    <Field name="briefDesc" type="text" label="Brief Description" placeholder="Brief Description"
                        component={this.renderMainFields} />
                    <Field name="imageurl" component={FileInput} />
                    <Field name="url" type="text" label="Especify the URL accessible by the browser" placeholder="url for this post"
                        component={this.renderMainFields} />
                    <Field name="section" component="select" className="ui search dropdown" style={{ marginBottom: '10px' }}>
                        <option >Choose a section</option>
                        <option value="arts">Arts</option>
                        <option value="cinema">Cinema</option>
                        <option value="games">Games</option>
                        <option value="music">Music</option>
                        <option value="tv">TV</option>
                    </Field>
                    <Field name="body" label="Post body" component={this.renderBodyArea} />
                    <button className="ui button blue" type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default reduxForm({
    form: 'addPostForm',
    destroyOnUnmount: false
})(PostForm);