import { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // Simulate AI response
    setMessages([...messages, { user: true, text: message }, { user: false, text: "AI response here!" }]);
  };

  return (
    <div>
      <h2>AI Chatbot</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.user ? 'right' : 'left' }}>
            {msg.text}
          </p>
        ))}
      </div>
      <button onClick={() => sendMessage('Hello!')}>Send Message</button>
    </div>
  );
}

export default Chatbot;
