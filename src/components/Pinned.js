import React from "react"
import '../styles/pinned.css'


const Pinned = ({ notes, onClick, pinned, onDelete }) => {
    // console.log(notes)

    const handleClick = (note) => {
        onClick(note)
    }

    const handleDelete = (note) => {
        onDelete(note)
    }

    return (
        <div className="pinned">
            {pinned ? <h2>Pinned</h2> : <h2>Others</h2>}
            <ul>
                {
                    notes.map((note) => {
                        if (note.pin === pinned) {
                            return <li key={note.id}>
                                <button onClick={() => handleClick(note)}>{!pinned ? "Pin" : "UnPin"}</button>
                                <h4>{note.title}</h4>
                                <p>{note.text}</p>
                                <button onClick={() => handleDelete(note)}>Delete</button>
                            </li>
                        } else {
                            return null;
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Pinned;