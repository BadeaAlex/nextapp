'use client';
import '@/app/ui/globals.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/page.tsx';
import Library from './notes/library/library.tsx';
import NewNotes from './notes/new/page.tsx';
import Import from './notes/import/page.tsx';
import Page from './page.tsx';

import React, { useState } from 'react';



type Route = {
  path: string
  name: string
}

type NavBarProps = {
  className?: string
  routes: Route[]
}


export default function RootLayout() {


  const routes = [{
    path: "/dashboard",
    name: "Dashboard",
    Component: Dashboard
  },
  {
    path: "/library",
    name: "Library",
    Component: Library
  },
  {
    path: "/notes/new",
    name: "New Note",
    Component: NewNotes
  },
  {
    path: "/notes/import",
    name: "Import Note",
    Component: Import
  },
  ]
 

return (
    <html lang="en">
      
      <Router>
        <NavBar routes={routes} />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="/" element={<Page />} />
        </Routes>
      </Router>
    </html>
  );
}



const NavBar: React.FC<NavBarProps> = ({routes, className = ''}) => {

  const [isNavVisible, setNavVisible] = useState(true);
  return (
    <nav className={`top-0 bottom-0 left-0 max-w-48 flex flex-row bg-red bg-blue-300 ${className}`}>
      <button 
        className='py-2 pl-4 pr-12 flex flex-row text-left hover:bg-red-200 '
        onClick={() => setNavVisible(!isNavVisible)}
      >
        X
      </button>
      {isNavVisible && routes.map((r, i) => (
        <a href={r.path}>
          <button className='w-full text-left py-2 pl-4 pr-12 hover:bg-green-200'>{r.name}</button>
        </a>       
      ))}
       
    <a href="/">
    <button className='w-full text-left py-2 pl-4 pr-12 hover:bg-green-200'>Home</button></a>
  
    </nav>
    
  );


}