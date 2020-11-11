import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Button } from "react-bootstrap";

export default function Proposal() {
  return (
    <>
      Send Proposals Now
      <EditorConvertToHTML />
    </>
  );
}

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  handleSubmitProposal = (event,editorState) => {
    
    console.log("proposal", JSON.stringify((convertToRaw(editorState))))
  };
  render() {
    const { editorState } = this.state;
  
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <br />
        <Button variant="primary" onClick={(event)=>{this.handleSubmitProposal(event,editorState)}}>
          Send
        </Button>
      </div>
    );
  }
}
