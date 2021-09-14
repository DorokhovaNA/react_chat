import { useState } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Chat.css';

const Message = ({onButtonClick }) => {
    const [inputText, setInputText] = useState('');

    const sendMessage = () => {
        const trimmedMessage = inputText.trim();
        if ( trimmedMessage !=='') {
            onButtonClick(trimmedMessage);
            setInputText('');
        }
    }
    
    return  (
            <div>
                <h5 className="title"> введите ваше сообщение</h5>
                <TextField id="standard-multiline-static"
                multiline
                rows={3}
                value={inputText}
                onChange={e => setInputText(e.target.value)} 
                onKeyDown={({key}) => {
                    if(key === 'Enter') {
                        console.log('enter');
                        sendMessage();
                    }
                }}
                className="input__text" type="text" placeholder='Ваше сообщение' />
                <br></br>
                <Button variant="contained" color="primary" onClick= {sendMessage} type="submit" className="button">Отправить</Button>
            </div>
            )
};

Message.propTypes = {
    sendMessage: PropTypes.func,
};

export default Message;