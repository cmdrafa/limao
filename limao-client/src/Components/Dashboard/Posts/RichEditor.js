import React, { Component } from 'react';
import {Editor, EditorState, ContentState, RichUtils } from 'draft-js';


import './RichEditor.css';



const linkyfiPlugin = createLinkifyPlugin();

class RichEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onChange = (editorState) => {
        this.setState({ editorState });
    };

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }

        return 'not-handled';
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onToggleCode = () => {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    }

    render() {
        return (
            <div style={{ padding: '2em', background: '#333', fontFamily: 'sans-serif' }} >
                <button onClick={this.onUnderlineClick}>Underline</button>
                <button onClick={this.onBoldClick}>Bold</button>
                <button onClick={this.onToggleCode}>Code Block</button>
                <button onClick={this.onToggleLink}>Link</button>
                <Editor
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default RichEditor;