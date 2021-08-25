import React, {useState, useEffect} from 'react';
import Message from './Message';
import MessageList from './MessageList';
import ChatList from './ChatList';
import './Chat.css'

function Chat() {
  const [inputText, setInputText] = useState('');
  const [messageArray, setMessageArray] = useState([]);

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
  setTimeout(() => {
    setMessageArray(prev => [...prev, {
      messageText: "Ваше сообщение получено!",
      author: 'bot',
      time: new Date().toLocaleString()
    },])  
  }, 2000)
  }

  useEffect(() => {
    if(messageArray.length > 0) {
      setTimeout(() => {
        
      }, 2000)
      
    }
  }, [messageArray])

  return (
    <div className="App">
      <div className = "appFlex">
        <ChatList />
        <MessageList messageArray = {messageArray} />
      </div>
      <Message onButtonClick = {onButtonClick} inputText = {inputText}  setInputText = {setInputText} /> 
    </div>
  );
}

export default Chat;
