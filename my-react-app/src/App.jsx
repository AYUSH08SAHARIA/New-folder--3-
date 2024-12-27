import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from "styled-components";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
   
      <h1>TypeQuest</h1>
      <div id="header">
            <div id="info"></div>
            <div id="buttons">
                <button id="newGameBtn">New game</button>
            </div>
        </div>
        <div id="game" tabindex="0">
            <div45 id="words"></div45>
            <div id="cursor"></div>
            <div id="focus-error">Click here to focus</div>
        </div>
      
    </>
  )
}

export default App
