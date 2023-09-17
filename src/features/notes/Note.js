import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'
import { useGetNotesQuery } from './notesApiSlice'
import { memo } from 'react'

const Note = ({ noteId }) => {

    const { note } = useGetNotesQuery("notesList", {
        selectFromResult: ({ data }) => ({
            note: data?.entities[noteId]
        }),
    })

    const navigate = useNavigate()

    if (note) {
        const created = new Date(note.createdAt).toLocaleString('tr-TR', { day: 'numeric', month: 'long' })

        const updated = new Date(note.updatedAt).toLocaleString('tr-TR', { day: 'numeric', month: 'long' })

        const handleEdit = () => navigate(`/dash/notes/${noteId}`)

        return (
            <tr className="table-row">
                <td className="table-cell note-status">
                    {note.completed
                        ? <span className="note-status-completed">Completed</span>
                        : <span className="note-status-open">Open</span>
                    }
                </td>
                <td className="table-cell note-created">{created}</td>
                <td className="table-cell note-updated">{updated}</td>
                <td className="table-cell note-title">{note.title}</td>
                <td className="table-cell note-username">{note.username}</td>

                <td className="table-cell">
                    <button
                        className="icon-button table-button"
                        onClick={handleEdit}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedNote = memo(Note)

export default memoizedNote