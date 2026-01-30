import React,{useState} from 'react'

function App() {
  const [color,SetColor]=useState("white")
  return (
    <div>
      <h1>Color picker</h1>
      <button onClick={()=>SetColor("red")}>Red</button>
      <button onClick={()=>SetColor("green")}>Green</button>
      <button onClick={()=>SetColor("blue")}>Blue</button>
      <div className='bgchange' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default App
