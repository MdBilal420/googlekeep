import React from "react"


const Pinned = ({ notes, onClick }) => {
    console.log(notes)

    const handleClick = (note) => {
        onClick(note)
    }

    return (
        <div>
            <ul>
                {
                    notes.map((note) => {
                        if (note.pin === true) {
                            return <li key={note.id}>
                                <button onClick={() => handleClick(note)}>Pin</button>
                                <h4>{note.heading}</h4>
                                <p>{note.text}</p>
                            </li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Pinned;