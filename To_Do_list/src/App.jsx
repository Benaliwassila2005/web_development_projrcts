import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SideBar from './components/SideBar/SideBar'
import Right_header from './components/header_right/Right_header'
import './app.css'
import Main_content from './components/bottom_body/Main_content'


function App() {
  const [count, setCount] = useState(0)

  return (
       <div className="app">
      <SideBar />

      <div className="main-content">
        <Right_header />
        <Main_content/>
        
        
      </div>
   
    </div>
    
    
  )
}

export default App
