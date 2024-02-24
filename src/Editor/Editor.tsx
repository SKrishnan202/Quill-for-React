import React, {useState} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import 'react-quill/dist/quill.snow.css';
import "./styles.css"
//import QuillBetterTable from 'quill-better-table';

{/*Quill.register({
    'modules/better-table': QuillBetterTable
  }, true)
*/}

export const Editor = () => {
    const [value, setvalue] = useState('');
 //   const table = editor.getModule('table');
    const toolbarOptions = [
                           ['bold', 'italic', 'underline','strike'],
                           ['blockquote', 'code-block'],
                           [{ 'header': [7, 6, 5, 4, 3, 2, 1] }],
                           [{ 'indent': '-1'}, { 'indent': '+1' }],
                           [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                           [{ 'script': 'sub'}, { 'script': 'super' }],    
                           [{ 'font': ['Arial', 'Sans-Serif', 'Times New Roman' ] }],
                           [{ 'align': ['left', 'center', 'right'] }],
                           [{ 'color': [] }, { 'background': [] }], 
                      ];
    const modules = {
        toolbar: toolbarOptions, /* table */
    }
    return (
        <div>
            <EditorToolbar />
            <ReactQuill modules={modules} 
                        theme="snow" 
                        value={state.value} 
                        onChange={handleChange} 
                        placeholder={"Add Text Here..."} 
                        formats={formats}
                        />
        </div>
    )
};
export default Editor;


