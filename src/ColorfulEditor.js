import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'draft-js';

export class ColorfulEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = { editorState: EditorState.createEmpty() }
        this.onChange = editorState => this.setState({ editorState })
    }

    render() {
        const { editorState } = this.state;
        return (
            <>
                <Editor
                    editorState={editorState}
                    onChange={this.onChange}
                />
            </>
        )
    }
}