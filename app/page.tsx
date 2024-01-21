'use client'
import React, {useState}  from 'react';
import './globals.css'



const Page = () => {
  const [title, setTitle] = useState("Note title...");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
     
    }
  }

  return (
    <div className="container max-w-full">
        <div className="sidebar">
        <ul>
                <li>Today</li>
                <li>Work</li>
                <li>Projects</li>
                <li>Favorites</li>
                <li>Archive</li>
                <li>Trash</li>
            </ul>
        </div>
        <div className="content ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
            className='title-input bg-transparent border-none w-full text-4xl font-bold outline-none shadow-none'
            onKeyPress={handleKeyPress}
          />
        </div>
    </div>
  )
};
export default Page;