import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

class RichEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);

    }


    handleChange(value) {
        this.setState({ text: value })
    }


    render() {
        console.log(this.state);
        return (
            <ReactQuill value={this.state.text}
                modules={modules}
                formats={formats}
                onChange={this.handleChange} />
        );
    }
}

export default RichEditor;