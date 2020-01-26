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

    this.setDomEditorRef = ref => this.domEditor = ref;
    this.focus = () => this.domEditor.focus();
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
        <div style={{ minHeight: '100px', cursor: 'text' }} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            ref={this.setDomEditorRef}
          />
        </div>
        <h1>ColorfulEditor</h1>
        <ColorfulEditor />
      </div>
    )
  }
}

export default MyEditor;
