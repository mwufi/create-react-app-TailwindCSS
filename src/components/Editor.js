import React, { Component } from 'react';

// add codemirror stuff
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';

// whatever theme you want, you have to import it here
import 'codemirror/theme/material.css';

// make it draggable
import Draggable from 'react-draggable';


class Editor extends Component {
  state = {
    code: `(* Example Pascal code *)

while a <> b do writeln('Waiting');

if a > b then
  writeln('Condition met')
else
  writeln('Condition not met');

for i := 1 to 10 do
  writeln('Iteration: ', i:1);

repeat
  a := a + 1
until a = 10;

case i of
  0: write('zero');
  1: write('one');
  2: write('two')
end;
`,
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  updateCode = (editor, codeChanges, other) => {
    console.log(editor);
    console.log(codeChanges);
    if (other){
      console.log(other);
    }
  }

  render() {
    const data = (
      <div className="container">
       <p className="handle">function 2</p>
       <div className="foo">
         <CodeMirror
           onChange={this.updateCode}
           value={this.state.code}
           options={{
             theme: 'material',
             keyMap: 'sublime',
             mode: 'jsx',
           }}
         />
        </div>
      </div>

    );

    const draggableData = (
      <Draggable handle=".handle">
         <div>{data}</div>
      </Draggable>
    );

    return draggableData;
  }
}

export default Editor;
