import React, {useState, useEffect} from 'react';
import './App.css';
import Message from './Message';
import MessageList from './MessageList';

function App() {
  const [inputText, setInputText] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const [botMessage, setbotMessage] = useState('');

  const onButtonClick = () => {
    const messageText = inputText;
    setMessageArray(prev => [...prev, {
      messageText,
      author: 'me',
      time: new Date().toLocaleString()
    },  
  ]);
  console.log(messageArray);
  setInputText('');
  }

  useEffect(() => {
    if(messageArray.length > 0) {
      setTimeout(() => {
        setbotMessage(() => [
        {
          botMess: "Ваше сообщение получено!",
          author: 'bot',
          time: new Date().toLocaleString(),  
        },])  
      }, 2000)
      
    }
  }, [setbotMessage, messageArray])

  return (
    <div className="App">
      <MessageList messageArray = {messageArray} botMessage={botMessage} />
      <Message onButtonClick = {onButtonClick} inputText = {inputText}  setInputText = {setInputText} /> 
    </div>
  );
}

export default App;
