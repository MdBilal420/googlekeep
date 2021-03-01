import { useState } from 'react';

const Tag = ({ onClick }) => {

    const [text, setText] = useState("")

    const handleClick = () => {
        onClick(text)
    }

    return <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleClick(text)}>Add Tag</button>
    </div>
}

export default Tag;