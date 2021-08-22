import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: "70%",
      display: "flex",
      justifyContent: "center",
    },
})

const MessageList = ({ messageArray }) => {  
    const classes = useStyles();  
    return  (
        <Card className={classes.root}>
            <div className="list">
                {messageArray.map((message, i) => {
                    const isMessageFromBot = message.author === 'bot';
                    return (
                        <div className={isMessageFromBot ? "botMessage" : "userMessage"}>
                            <div key={i}>
                            <div className="messageAuthor">{message.author}</div>
                            <div className="messageText">{message.messageText}</div>
                            <div className="messageDate">{message.time}</div></div>
                        </div>
                    );
                })}
            </div>
        </Card>
    )
};

MessageList.propTypes = {
    messageArray: PropTypes.array.isRequired,
};

export default MessageList;

// 