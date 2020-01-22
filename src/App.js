import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { ColorfulEditor } from './ColorfulEditor';

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = editorState => {
      this.setState({ editorState });
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  _onItalicClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  render() {

    return (
      <div>
        <h1>Editor</h1>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicClick.bind(this)}>Italic</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
        <h1>ColorfulEditor</h1>
        <ColorfulEditor />
      </div>
    )
  }
}

export default MyEditor;
