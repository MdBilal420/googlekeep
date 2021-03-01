import { useState } from 'react';
import './App.css';
import Input from './components/Input'
import Pinned from './components/Pinned';
import Tag from './components/Tag';
import TagSelect from './components/TagSelect';

const data = [
  {
    id: Math.random() * 100,
    title: "Run",
    text: "Running is good",
    pin: false
  },
  {
    id: Math.random() * 100,
    title: "Sleep",
    text: "Sleeping is bad",
    pin: false
  }
]


const App = () => {

  const [notes, setNotes] = useState(data);

  const [tags, setTags] = useState([1, 2, 3]);


  const addNotes = (task) => {
    const value = [...notes, task]
    setNotes(value)
  };

  const pinNotes = ({ id, title, text, pin }) => {
    const temp = [...notes]
    setNotes(
      temp.map((note) => note.id === id ? { id, title, text, pin: !note.pin } : note
      )
    )
  }

  const handleDelete = ({ id }) => {
    const temp = [...notes]
    setNotes(
      temp.filter((note) => note.id !== id)
    )
  }


  const addTag = (text) => {
    setTags([...tags, text])
  }


  return (
    <section className="App">
      <Input value={notes} onClick={addNotes} />
      <Pinned notes={notes} onClick={pinNotes} pinned={false} onDelete={handleDelete} />
      <Pinned notes={notes} onClick={pinNotes} pinned={true} onDelete={handleDelete} />
      <Tag onClick={addTag} />
      {/* {tag}  */}
      <TagSelect tags={tags} />
    </section>
  );
}

export default App;
