import React from 'react'
import "./styles.css";
import Button from '../Button';
function Header() {
  return (
    <div className='navbar'>
   <h1 className='logo'>CashFlow <span style={{color:"var(--blue)"}}>
   Manager</span></h1> 
   <div className='links'>
    <a href='/'>
    <p className='link'>Home</p>
    </a>
    <a href='/'>
    <p className='link'>Dashboard</p>
    </a>
    <a href='/'>
    <Button text={"LOG IN"}/>
    </a>
    <a href='/'>
    <Button text={"SHARE"}/>
    </a>
   </div>
  </div>
  )
}

export default Header