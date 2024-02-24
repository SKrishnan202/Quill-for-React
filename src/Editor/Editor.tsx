import React, {useState} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import QuillBetterTable from 'quill-better-table';

{/*uill.register({
    'modules/better-table': QuillBetterTable
  }, true)
*/}

const Editor = () => {
    const [value, setvalue] = useState('');
 //   const table = editor.getModule('table');
    const toolbarOptions = [
                           ['bold', 'italic', 'underline','strike'],
                           ['blockquote', 'code-block'],
                           [{ 'header': [7, 6, 5, 4, 3, 2, 1] }],
                           [{ 'indent': '-1'}, { 'indent': '+1' }],
                           [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                           [{ 'script': 'sub'}, { 'script': 'super' }],    
                           [{ 'font': ['Arial', 'Times New Roman', 'Sans-Serif' ] }],
                           [{ 'align': ['left', 'center', 'right'] }],
                           [{ 'color': [] }, { 'background': [] }], 
                      ];
    const module = {
        toolbar: toolbarOptions, /* table */
    }
    return (
        <div><ReactQuill modules={module} theme="snow" value={'Add Text Here...'} onChange={setvalue} /></div>
    )
};
export default Editor;
