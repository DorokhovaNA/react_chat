import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const ChatPreview = ({ messageArray, user }) => {
  const history = useHistory();
  const { name, id } = user;

  const lastMessage =
    messageArray.length > 0
      ? messageArray[messageArray.length - 1]
      : { text: "", lastUpdate: null };

  const unreadMessagesCount = messageArray.reduce((acc, message) => {
    if (message.userId === id && !message.isRead) {
      acc++;
    }
    return acc;
  }, 1);
  return (
    <Box className="chatBox">
      <Box className="chatWrapper" onClick={() => history.push(`/chat/${id}`)}>
        <Typography variant="subtitle2">{name}</Typography>
        <Typography variant="caption">{lastMessage.messageText}</Typography>
      </Box>
      <Box className="chatInfo">
        <Typography variant="caption">{lastMessage.lastUpdate}</Typography>
        <span>
		{unreadMessagesCount > 0 ?
          <span className="countMsg">
            {unreadMessagesCount}
          </span> : ''}
        </span>
      </Box>
    </Box>
  );
};

export default ChatPreview;
