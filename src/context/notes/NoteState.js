import NoteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '634914cd76b8213078a74314',
      user: '6349141a76b8213078a7430c',
      title: 'Hello harry ',
      description: 'are you Wake up',
      tag: 'personal',
      date: '2022-10-14T07:50:37.485Z',
      __v: 0,
    },
    {
      _id: '634d478e19160ba3d2410d42',
      user: '6349141a76b8213078a7430c',
      title: 'Hello harry ',
      description: 'are you Wake up',
      tag: 'personal',
      date: '2022-10-17T12:16:14.785Z',
      __v: 0,
    },
    {
      _id: '634d47a219160ba3d2410d44',
      user: '6349141a76b8213078a7430c',
      title: 'Hello harry1 ',
      description: 'are you Wake up 1',
      tag: 'personal',
      date: '2022-10-17T12:16:34.163Z',
      __v: 0,
    },
    {
      _id: '634d47ab19160ba3d2410d46',
      user: '6349141a76b8213078a7430c',
      title: 'Hello harry2 ',
      description: 'are you Wake up 2',
      tag: 'personal',
      date: '2022-10-17T12:16:43.946Z',
      __v: 0,
    },
    {
      _id: '634d47b519160ba3d2410d48',
      user: '6349141a76b8213078a7430c',
      title: 'Hello harry3 ',
      description: 'are you Wake up 3',
      tag: 'personal',
      date: '2022-10-17T12:16:53.642Z',
      __v: 0,
    },
  ]

  const [notes, setNotes] = useState(notesInitial)
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
