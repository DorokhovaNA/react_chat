const Message = (props) => {
    return  <div>
                <h5 className="title">{props.textToPut}, введите ваше сообщение</h5>
                <textarea className="input__text" type="text" placeholder='Ваше сообщение' />
                <br></br>
                <button type="submit" className="button">Отправить</button>
            </div>
}

export default Message;