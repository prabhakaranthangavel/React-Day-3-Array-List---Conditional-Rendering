import React from 'react'

function Note({note}) {
    if(note.wc) {
        return (
            <li> { note.content } { note.wc && '⭐⭐⭐' }</li>
          )
        }
        return (
            <li key = {note.id}>{note.content} </li>
        )
}

export default Note