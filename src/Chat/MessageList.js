import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./Chat.css";

const MessageList = ({ messageArray }) => {  
    const { myId } = useSelector((state) => state.chat);  
    return  (
        <div className="list">
            {messageArray && messageArray.map((message, i) => (
                <div
                key={i}
                className={`
                  ${
                    message.userId === myId
                      ? "userMessage"
                      : "senderMessage"
                  } ${"message"}`}
                >
                  <div className="messageAuthor">{message.userId}</div>
                  <hr/>
                  <div className="messageText">{message.messageText}</div>
                  <div className="messageDate">{message.lastUpdate}</div>  
              </div>
            ))}
        </div>  
    )
};

MessageList.propTypes = {
    messageArray: PropTypes.array,
};

export default MessageList;

 