import PropTypes from "prop-types";

const MessageList = ({ messageArray, botMessage }) => {    
    return  (
            <div className="list">
                {messageArray.map((message, i) => 
                        <div>
                            <div key={i}>{message.author}:{message.messageText}   {message.time}</div>
                        </div>
                )},
                {botMessage.map((messageBot, i) => 
                        <div key={i}>{messageBot.author}:{messageBot.botMess}   {messageBot.time}</div>
                )}
            </div>
            )
};

MessageList.propTypes = {
    messageArray: PropTypes.object.isRequired,
};

export default MessageList;

// 