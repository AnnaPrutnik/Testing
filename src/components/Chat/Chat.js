import {useSelector, useDispatch} from 'react-redux';
import {deleteMsg} from '../../redux/actions';
import './Chat.css';

function Chat() {
  const chat = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteMsg = (e) => {
    const id = e.currentTarget.dataset.id;
    dispatch(deleteMsg(id));
  };

  return (
    <ul className='chat'>
      {chat.map((msg) => (
        <li
          className='msg'
          key={msg.id}
          data-id={msg.id}
          onClick={handleDeleteMsg}
        >
          <span className='text'>{msg.text}</span>
          <span className='time'>{msg.time}</span>
        </li>
      ))}
    </ul>
  );
}

export default Chat;
