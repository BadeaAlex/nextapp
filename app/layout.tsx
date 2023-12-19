import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';
import { useState } from 'react';
 
type Route = {
  path: string
  name: string
}

type NavBarProps = {
  className?: string
  routes: Route[]
}

const NavBar: React.FC<NavBarProps> = ({routes, className = ''}) => {

  return (
    <nav className={'fixed top-0 bottom-0 left-0 max-w-48 flex flex-col bg-white ' + className}>
      <button className='py-2 pl-4 pr-12 text-left'>X</button>
      {routes.map((r, i) => (
        <a href={r.path}><button className='w-full text-left py-2 pl-4 pr-12 hover:bg-gray-300'>{r.name}</button></a>
      ))}
    </nav>
  )

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const routes = [{
    path: "/dashboard",
    name: "Dashboard"
  },
  {
    path: "/library",
    name: "Library"
  },
  {
    path: "/notes/new",
    name: "New Note"
  },
  {
    path: "/notes/import",
    name: "Import Note"
  },
  ]

  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <NavBar className='transform -translate-x-0' routes={routes}/>
        <main>{children}</main>
        
        </body>
    </html>
  );
}