import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SendIcon } from 'lucide-react';
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log('Message sent:', message);
      setMessage('');
    }
  };
  return <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button onClick={toggleChat} className={`${isOpen ? 'hidden' : 'flex'} bg-purple-700 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg transition duration-300`} aria-label="Open chat">
        <MessageCircleIcon size={24} />
      </button>
      {/* Chat window */}
      {isOpen && <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col" style={{
      height: '400px'
    }}>
          {/* Chat header */}
          <div className="bg-purple-700 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with Yeuclidean Hill</h3>
            <button onClick={toggleChat} className="text-white hover:text-amber-300 transition duration-300">
              <XIcon size={20} />
            </button>
          </div>
          {/* Chat messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            <div className="mb-4">
              <div className="bg-purple-100 p-3 rounded-lg inline-block max-w-xs">
                <p className="text-gray-800">
                  Hello! How can we help you today?
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Support Agent • Just now
              </p>
            </div>
          </div>
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t p-4 flex items-center">
            <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Type your message..." className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r-md transition duration-300">
              <SendIcon size={18} />
            </button>
          </form>
        </div>}
    </div>;
};
export default ChatWidget;