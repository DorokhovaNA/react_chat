import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const ChatPreview = ({messageArray, user}) => {
	const history = useHistory();

  	const { name, id } = user;
	
	const lastMessage =
	 	messageArray.length > 0 ? messageArray[messageArray.length - 1]
		: { text: "", lastUpdate: null };
  
	const unreadMessagesCount = messageArray.reduce((acc, message) => {
	  if (message.userId === id && !message.isRead) {
		acc++;
	  }
	  return acc;
	}, 0);  
	return (
		<Box>
			<Box className="chatWrapper"
				onClick={() => history.push(`/chat/${id}`)}
			>
				<Typography>{name}</Typography>
				<Typography>{lastMessage.text}</Typography>
			</Box>
			<Box>
				<Typography variant="caption">
					{lastMessage.lastUpdate}
				</Typography>
				<Typography variant="subtitle1">
					{unreadMessagesCount > 0 && unreadMessagesCount}
				</Typography>
			</Box>
		</Box>
	)
}

export default ChatPreview;