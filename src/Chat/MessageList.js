import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './Chat.css';
import { useSelector } from "react-redux";


const useStyles = makeStyles({
    root: {
      width: "70%",
      display: "flex",
      justifyContent: "center",
    },

    
})

const MessageList = ({ messageArray }) => {  
    const classes = useStyles();
    const { myId } = useSelector((state) => state.chat);  
    return  (
      //  <Card className={classes.root}>
            <div className="list">
                {messageArray.map((message, i) => (
                    
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
                      <div className="messageText">{message.text}</div>
                      <div className="messageDate">{message.lastUpdate}</div>
                    
                  </div>
                ))}
            </div>
      //  </Card>
    )
};

// MessageList.propTypes = {
//     messageArray: PropTypes.array.isRequired,
// };

export default MessageList;

// 