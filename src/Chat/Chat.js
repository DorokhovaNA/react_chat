import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "./ChatSlice";
import { useParams } from "react-router-dom";
import { sendMessageWithThunk } from "./ChatActions";
import Message from "./Message";
import MessageList from "./MessageList";
import "./Chat.css";

// const OnSendMessageWithThunk = (message) => (dispatch, getState) => {
//     const { chat } = getState();
//     const myId = chat.myId;
//     dispatch(addMessage(message))
//     if(message.userId === myId) {
//         const botMessage = {
//             chatId: message.chatId,
//             messageText: "Ваше сообщение получено!",
//             userId: message.chatId,
//         };
//         setTimeout(() => dispatch(addMessage(botMessage)), 2000);
//     }
// };

function Chat() {
    const urlParams = useParams();
    const chatId = Number.parseInt(urlParams.id);
    
    const messageArray = useSelector((state) => state.chat.messageArray[chatId]);
    const myId = useSelector((state) => state.chat.myId);
    const dispatch = useDispatch();
    const onButtonClick = (messageText) => {
        dispatch(sendMessageWithThunk({
            chatId,
            messageText,
            userId: myId,
        })); 
        console.log(messageArray);
    }

  // useEffect(() => {
  //   if(messageArray.length > 0) {
  //     setTimeout(() => {
  //       console.log("Ваше сообщение получено!");
  //     }, 2000)
      
  //   }
  // }, [messageArray])
    return (
        <div className="appWrapper">
            <div className = "appFlex">
                <MessageList messageArray = {messageArray} />
            </div>
            <Message onButtonClick = {onButtonClick} /> 
        </div>
    );
}

export default Chat;
