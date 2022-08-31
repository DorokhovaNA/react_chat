import PropTypes from "prop-types";

const Message = ({onButtonClick, setInputText, inputText}) => {

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
                <textarea value={inputText} 
                onChange={e => setInputText(e.target.value)} 
                onKeyDown={({key}) => {
                    if(key === 'Enter') {
                        console.log('enter');
                        sendMessage();
                    }
                }}
                className="input__text" type="text" placeholder='Ваше сообщение' />
                <br></br>
                <button onClick= {sendMessage} type="submit" className="button">Отправить</button>
            </div>
            )
};

Message.propTypes = {
    sendMessage: PropTypes.func.isRequired,
};

export default Message;
