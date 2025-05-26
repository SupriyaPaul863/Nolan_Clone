import React, { useState } from 'react';

const ChatGPTChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setChat([...chat, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMsg = { role: 'assistant', content: data.reply };
      setChat(prev => [...prev, botMsg]);
    } catch (error) {
      setChat(prev => [...prev, { role: 'assistant', content: 'Something went wrong.' }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Ask AI Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg transition-all"
        >
          Ask AI
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-2xl flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-red-200">&times;</button>
          </div>

          {/* Chat Area */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 bg-gray-50">
            {chat.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`px-4 py-2 rounded-full max-w-[80%] ${
                    msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <p className="text-gray-400">Thinking...</p>}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="flex-1 px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatGPTChat;




// import React, { useState } from 'react';

// const ChatGPTChat = () => {
//   const [input, setInput] = useState('');
//   const [chat, setChat] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const newChat = [...chat, { role: 'user', content: input }];
//     setChat(newChat);
//     setInput('');
//     setLoading(true);

//     try {
//       const response = await fetch('http://localhost:5000/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: input })
//       });

//       const data = await response.json();
//       setChat([...newChat, { role: 'assistant', content: data.reply }]);
//     } catch (err) {
//       console.error('Error:', err);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="p-4 max-w-xl mx-auto space-y-4">
//       <div className=" p-4 rounded border-t border-l h-80 overflow-y-auto">
//         {chat.map((msg, idx) => (
//           <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
//             <span className={`inline-block p-2 rounded-full ${msg.role === 'user' ? 'bg-blue-600' : 'bg-green-100'}`}>
//               {msg.content}
//             </span>
//           </div>
//         ))}
//         {loading && <p className="text-white">Thinking...</p>}
//       </div>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === 'Enter' && handleSend()}
//           className="flex-1 border rounded p-2"
//           placeholder="Ask ChatGPT..."
//         />
//         <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded-full">
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatGPTChat;
