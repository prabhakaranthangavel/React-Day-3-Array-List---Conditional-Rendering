import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes = [
  {
    id : 1,
    content : "INDIA",
    wc : true
  },

  {
    id : 2,
    content : "NEWZELAND",
    wc : false
  },

  {
    id : 3,
    content : "AUSTRALIA",
    wc : true
  },

  {
    id : 4,
    content : "SOUTHAFRICA",
    wc : false
  },

  {
    id : 5,
    content : "ENGLAND",
    wc : true
  }
]
ReactDOM.createRoot(document.getElementById('root')).
render(<App notes = {notes}/>)
