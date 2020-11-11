import React, {Component} from 'react';
import {EditorState , convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';



// class EditorContainer extends Component{
//       constructor(props){
//         super(props);
//         this.state = {
//           editorState: EditorState.createEmpty(),
//         };
//       }
    
//       onEditorStateChange = (editorState) => {
//         // console.log(editorState)
//         this.setState({
//           editorState,
//         });
//       };
     
//       render(){
//         const { editorState } = this.state;
//         console.log("ed" , this.state.editorState)
//         return <div className='editor' style={{"border" :" 2px solid black"}}>
//           <Editor
//             editorState={editorState}
//             onEditorStateChange={this.onEditorStateChange}    
//             toolbar={{
//               inline: { inDropdown: true },
//               list: { inDropdown: true },
//               textAlign: { inDropdown: true },
//               link: { inDropdown: true },
//               history: { inDropdown: true },
//             //   image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
//             }}
//           />
//         </div>
//       }
//     }

    export default function Proposal() {


      return (
            <>
            Send Proposals Now 
            <EditorConvertToHTML />
          </>
      )
}


class EditorConvertToHTML extends Component {
      state = {
        editorState: EditorState.createEmpty(),
      }
    
      onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
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
          </div>
        );
      }
    }