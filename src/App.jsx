import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auths from './components/Auths'
import Welcome from './components/Welcome'
import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
      <div className='main'>
        <section className='sidebar'>

          <Auths key={"key"} isLogin={isLogin} />
        </section>
        <section className='welcomePage'>
          <Welcome />
        </section>
      </div>
    </>
  )
}

export default App
