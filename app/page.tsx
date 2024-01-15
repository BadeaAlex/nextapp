import React from 'react';
import './ui/globals.css'


const Page = () => {
  return (
    <div className="container">
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
        <div className="content"></div>
    </div>
  )
};
export default Page;