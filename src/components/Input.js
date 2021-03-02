import React, { useState } from 'react';
import '../styles/input.css'


const Input = ({ onClick }) => {

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")


    const handleClick = () => {
        const task = {
            id: Math.random() * 100,
            title: title,
            text: text,
            pin: false,
        }
        onClick(task)
    }



    return (
        <div className="input-note">
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
            <textarea placeholder="Take a note..." value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button onClick={handleClick}>+ Add</button>
        </div>
    )
}

export default Input;