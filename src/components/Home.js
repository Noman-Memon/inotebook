import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Home() {
  const context = useContext(noteContext)
  const { notes, setNotes } = context
  return (
    <div>
      This is Home page
      <h2>
        {notes.map((note) => {
          return note.title
        })}
      </h2>
    </div>
  )
}
