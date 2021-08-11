import React, {useState} from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <div className="App">
      <h5 className="title">Ваше имя</h5>
      <input className="input__name"  value={inputText} onChange={e => setInputText(e.target.value)} />
      <h5 className="title">Добро пожаловать, {inputText}!</h5>
      
      <Message textToPut = {inputText} />
      
     
    </div>
  );
}

export default App;
