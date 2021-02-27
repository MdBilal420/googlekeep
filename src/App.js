import { useState } from 'react';
import './App.css';
import Input from './components/Input'
import Pinned from './components/Pinned';

const data = [
  {
    id: Math.random() * 100,
    heading: "Run",
    text: "Running is good",
    pin: false
  },
  {
    id: Math.random() * 100,
    heading: "Sleep",
    text: "Sleeping is bad",
    pin: false
  }
]

const App = () => {

  const [notes, setNotes] = useState(data);

  const addNotes = (task) => {
    const value = [...notes, task]
    setNotes(value)
  };

  const pinNotes = ({ id, heading, text, pin }) => {

    const temp = [...notes]
    // console.log(temp)
    setNotes(
      temp.map((note) => note.id === id ? { id, heading, text, pin: !note.pin } : note
      )
    )
  }


  return (
    <section className="App">
      <Input value={notes} onClick={addNotes} />
      <Pinned notes={notes} onClick={pinNotes} />
    </section>
  );
}

export default App;
