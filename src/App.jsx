import { useState } from 'react'
import { Home} from './pages';
import './App.css';

function App() {
  document.addEventListener('contextmenu', (e)=>{
    (e).preventDefault();
  })
  const [count, setCount] = useState(0)

  return (
    <div className="main w-full h-screen">
      <Home/>
    </div>
  )
}

export default App
