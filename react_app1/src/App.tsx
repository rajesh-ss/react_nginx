// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import { Outlet } from 'react-router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{
      border:'10px solid black',
      height:'50vh',
      width:'50vw',
      margin:'0px'

    }}>
        <Outlet/>
    </div>
  )
}

export default App
