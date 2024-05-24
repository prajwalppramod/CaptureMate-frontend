import React from 'react';
import { useParams } from 'react-router-dom';

const ChatScreen = () => {
  const { title, img } = useParams();
  const [messages, setMessages] = React.useState([
    { id: 1, img: '/assets/sent1.jpg', type: 'sent' },
    { id: 2, img: '/assets/received1.jpg', type: 'received' },
  ]);

  // Debugging info: log the params to the console
  console.log('title:', title, 'img:', img);

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex items-center p-4 bg-gray-800 text-white'>
        <img src={img} alt={title} className='w-10 h-10 rounded-full mr-4' />
        <h1 className='text-xl text-white'>{title}</h1>
      </div>
      <div className='flex-1 p-4 overflow-auto'>
        {messages.map(message => (
          <div key={message.id} className={`my-2 ${message.type === 'sent' ? 'text-right' : 'text-left'}`}>
            <img src={message.img} alt="chat" className='inline-block max-w-xs max-h-xs' />
          </div>
        ))}
      </div>
      <div className='p-4 flex justify-center'>
        <input type='file' accept='image/*' onChange={handleFileChange} className='hidden' id='fileInput' />
        <label htmlFor='fileInput' className='cursor-pointer'>
          <span className='p-2 bg-gray-800 text-white rounded'>Add Image</span>
        </label>
      </div>
    </div>
  );

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const imgSrc = URL.createObjectURL(file);
      setMessages([...messages, { id: messages.length + 1, img: imgSrc, type: 'sent' }]);
    }
  }
};

export default ChatScreen;
