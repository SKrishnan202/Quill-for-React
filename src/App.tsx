import React from 'react';
import './App.css';
import Editor from './Editor/Editor';

function App() {
  return (
    <div className="App">
       <Editor />
    </div>
  );
}

export default App;


// source for tables - https://codepen.io/quill/pen/QxypzX
// more code for tables - https://stackoverflow.com/questions/52331928/how-can-i-initialize-table-in-quill-js-2-0
// source for quill better table - https://www.npmjs.com/package/quill-better-table



{/* 
<div class="container">
  <div class="panel">
    <div id="snow-container"></div>
    <div>
      <button id="insert-table">Insert Table</button>
      <button id="insert-row-above">Insert Row Above</button>
      <button id="insert-row-below">Insert Row Below</button>
      <button id="insert-column-left">Insert Column Left</button>
      <button id="insert-column-right">Insert Column Right</button>
      <button id="delete-row">Delete Row</button>
      <button id="delete-column">Delete Column</button>
      <button id="delete-table">Delete Table</button>
    </div>
  </div>
  <div class="panel">
    <div id="bubble-container"></div>
  </div>
  <div class="panel">
    <div id="output-container"></div>
  </div>
</div>



body {
  padding: 25px;
}
#bubble-container, #snow-container {
  height: 300px;
  margin-bottom: 10px;
}
.container {
  display: flex;
}
.panel {
  flex: 1;
  margin-left: 25px;
  margin-right: 25px;
}


var bubble = new Quill('#bubble-container', {
  theme: 'bubble',
  modules: {
    table: true,
  }
});
var snow = new Quill('#snow-container', {
  theme: 'snow',
  modules: {
    table: true,
  }
});
var output = new Quill('#output-container', {
  theme: 'bubble',
  modules: { table: true },
  readOnly: true,
})
bubble.on('text-change', function(delta, old, source) {
  if (source === 'user') {
    snow.updateContents(delta, 'api');
    updateOutput();
  }
});
const table = snow.getModule('table');
snow.on('text-change', function(delta, old, source) {
  if (source === 'user') {
    bubble.updateContents(delta, 'api');
    updateOutput();
  }
});

function updateOutput() {
  const bubbleContent = bubble.getContents();
  const snowContent = snow.getContents();
  // TODO compare
  output.setContents(bubbleContent);
  const outputContent = output.getContents();
  // TODO compare outputContent
}


document.querySelector('#insert-table').addEventListener('click', function() {
  table.insertTable(2, 2);
});
document.querySelector('#insert-row-above').addEventListener('click', function() {
  table.insertRowAbove();
});
document.querySelector('#insert-row-below').addEventListener('click', function() {
  table.insertRowBelow();
});
document.querySelector('#insert-column-left').addEventListener('click', function() {
  table.insertColumnLeft();
});
document.querySelector('#insert-column-right').addEventListener('click', function() {
  table.insertColumnRight();
});
document.querySelector('#delete-row').addEventListener('click', function() {
  table.deleteRow();
});
document.querySelector('#delete-column').addEventListener('click', function() {
  table.deleteColumn();
});
document.querySelector('#delete-table').addEventListener('click', function() {
  table.deleteTable();
});

*/}