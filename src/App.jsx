// import Hello from "./components/Hello";

import React from 'react'
import Note from './components/Note';
import './style/App.css'

function App({notes}) {
  console.log(notes);

  return (
    <div>
      <h1>World Cup won the Teams</h1>
      <ul id='teamname'>
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
        <li>{notes[3].content}</li>
        <li>{notes[4].content}</li> */}
        {
          notes.map(note => 
            <Note key = {note.id} note = {note} />  
          )
        }
      </ul>
    </div>
  )
}

export default App