import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addMsg} from '../../redux/actions';
import './Text.css';

function Text() {
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (msg.trim() === '') {
      alert('Enter your message');
      return;
    }
    const id = Date.now();

    const date = new Date().toLocaleTimeString('ru-RU', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    const newMsg = {id, text: msg, time: date};
    dispatch(addMsg({...newMsg}));
    setMsg('');
  };

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        <input
          type='text'
          className='input'
          value={msg}
          onChange={handleChange}
        />
      </label>
      <button className='btn'></button>
    </form>
  );
}

export default Text;
