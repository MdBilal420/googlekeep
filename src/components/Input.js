import React, { useState } from 'react';


const Input = ({ onClick }) => {

    const [heading, setHeading] = useState("")
    const [text, setText] = useState("")

    const handleClick = () => {
        const task = {
            id: Math.random() * 100,
            heading: heading,
            text: text,
            pin: false
        }
        onClick(task)
    }

    return <div>
        <label>Heading: </label> <input value={heading} onChange={(e) => setHeading(e.target.value)} />
        <label>Text: </label> <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>Submit</button>

    </div>
}

export default Input;