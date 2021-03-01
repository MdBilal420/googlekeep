import React, { useState } from 'react';


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



    return <div>
        <label>Title: </label> <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Text: </label> <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={handleClick}>Add Note</button>
    </div>
}

export default Input;