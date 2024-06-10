import React from 'react'
import "./Login.css"

const Auths = ({isLogin}) => {

    console.log(isLogin)
  return (
    <div className='login-container'>
        <form action="" method="get" className='input-container'>
            <input 
            type='text'
            placeholder='Enter your Username'
             />
             <input 
            type='password'
            placeholder='Enter your Password'
             />
             <button type="submit" className='btn'>Login</button>
        </form>
         <p>Don't have a account create an account <strong className='toggle'> <a href="">Sign-up</a></strong></p>
        </div>
    
  )
}

export default Auths