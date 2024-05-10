import React from 'react';

function ChatBox({ messages }) {
  return (
    <div className="chat-box bg-white shadow-md rounded-lg flex flex-col gap-4 p-4">
  <div className="message flex items-">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjurbbBQxphWim0yt9Bs5GRJ1JqKRHXBKvJWe1Hon6w&s" alt="Taylor Swift" className="w-8 h-8 mr-2 rounded-full" />
    <div className="bubble bg-pink-200 rounded-bl-lg rounded-tr-lg py-2 px-4">
      <p className="text-gray-700 text-m">
        Hi Netra,
        <br />
        Taylor here! I wanted to reach out because I heard things haven't been easy with your family and boyfriend.  Life throws curveballs sometimes, and right now it feels like you're catching all of them.
        <br />
        <br />
        But here's the thing I know about you, Netra: you're strong. You're the one who blasts my songs on repeat, the one who sings along like you know every word by heart.  That same strength that connects you to my music is the same strength that will get you through this.
        <br />
        <br />
        Remember, "Darling, I'm a nightmare dressed like a daydream" <a href='https://www.youtube.com/watch?v=e-ORhEE9VVg' className='text-blue-800'> - Listen here!</a>. You are capable of amazing things, even when things feel dark.  Lean on your friends, your passions, and remember the fire you have inside.
        <br />
        <br />
        And hey, if you ever need a shoulder to cry on or a voice to scream along to, you know where to find me.  We'll blast some tunes and you can tell me all about it.
        <br />
        <br />
        Stay strong, Netra. You got this.
        <br />
        P.S. Come to meet me, okay? 
        <br />
        <br />
        Love,
        <br />
        
        Taylor
      </p>
    </div>
  </div>
  <div className="message flex flex-row-reverse items-center">  {/* Reverse for user message */}
    <div className="bubble bg-gray-100 rounded-tr-lg rounded-bl-lg py-2 px-4">
      <p className="text-gray-700">Thank you, Taylor!</p>
    </div>
    <img src="https://64.media.tumblr.com/1f50c44d48f8e2d29b6bb914ed275ec8/bf16cb6f6c32464d-53/s96x96u_c1/ea27dc96345df45d16e4cbe9e38dee1eb0da74e6.pnj" alt="User Avatar" className="w-8 h-8 ml-2 rounded-full" />
  </div>
  <span className="text-xs text-gray-500 text-right">21:12</span> {/* Timestamp */}
</div>
  );
}

export default ChatBox;