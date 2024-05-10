import React, { useState, useEffect } from 'react';
import ChatBox from './chatBox';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const motivationalMessages = [
      ''
    ]; // Combined motivational and concert messages

    setMessages(motivationalMessages); // Set all messages at once

    return () => {}; // Empty cleanup function, no interval to clear
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center text-4xl font-bold mb-8 text-pink-800 bg-pink-200 rounded-lg p-4">
      Hey Netra, even the bravest hearts get a little shaky sometimes. But remember, you are stronger than you know.
      </header>
      <header className="text-left text-xl font-bold mb-2 text-black rounded-lg p-4">
      Message from Taylor!
      </header>
      <main className="flex flex-col items-center space-y-4">
        <ChatBox messages={messages} />
      </main>
    </div>
  );
}

export default App;