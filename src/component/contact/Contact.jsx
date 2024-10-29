import { useState } from "react";
import { useEffect } from "react";
import "./contact.css"
import axios from 'axios';
function Contact() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, message };
    try {
      const response = await axios.post('https://portfolio-backend-sooty-zeta.vercel.app/register', newUser);
      setUsers([...users, response.data]);
      alert("your form has been submitted")
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className='contact'>
      <form className='form' onSubmit={handleSubmit} >
        <div className='touch'>
          <a>Contact Us</a>
          <div className='touch-details'>
            <a > Would you like to work together, or simply</a>
            <a > chat about a Project? Don't hesitate to contact me!</a>
          </div>
        </div>
        <div className='input-details'>
          <div className='inputs-type'>
            <a> Name </a>
            <input type="text" id='name' className='input-container' required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='inputs-type' >
            <a> Email </a>
            <input type="text" id='email' className='input-container' required value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='inputs-type'>
            <a> Message </a>
            <textarea type="text" rows={3} cols={5} id='message' className='message-container' required value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type='submit' className='button'>Send message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
