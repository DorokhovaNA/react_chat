import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Chat.css';

const ChatList = () => {
    const chatArray = [
        {
            name: "Общие вопросы",
            id: 'c1',
            lastUpdate: "22.08.2021"
        },
        {
            name: "Флуд",
            id: 'c2',
            lastUpdate: "22.08.2021"
        },
        {
            name: "Vacation",
            id: 'c3',
            lastUpdate: "20.08.2021"
        }
    ]
    return (
            <List>
                <ListItem className="chatItem">
                    {chatArray.map((chat, id) => {
                    
                        return (
                            <ListItemText key={id} id={id} primary={chat.name} secondary={chat.lastUpdate} />
                        );
                    })}  
                </ListItem>
            </List>
    )
}

export default ChatList;