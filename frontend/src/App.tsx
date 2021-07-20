import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './components/chat/Chat';
import { InputField } from './components/input-field/InputField';

const LOCAL_STORAGE_AUTHOR_KEY = 'chat-author';

function App() {

  const [ author, setAuthor ] = useState<string | null>(localStorage.getItem(LOCAL_STORAGE_AUTHOR_KEY));

  const submitAuthor = (value: string | null) => {
    if (value) {
      localStorage.setItem(LOCAL_STORAGE_AUTHOR_KEY, value);
    } else {
      localStorage.removeItem(LOCAL_STORAGE_AUTHOR_KEY);
    }
    setAuthor(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <InputField initialValue={author} onSubmit={val => submitAuthor(val)} disabled={!!author} placeholder="Please enter your name..."/>
        { author && <button onClick={() => submitAuthor(null)}>Reset</button> }
      </header>
      <Chat author={author}/>
    </div>
  );
}

export default App;
