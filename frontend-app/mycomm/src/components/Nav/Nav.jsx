import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className='navContainer'>
      <div className='navButtons'>
        <Link className='navButton' id='navButtonHome' to='/'>Home</Link>
        <Link className='navButton' to='/ipl'>IPL</Link>
        <Link className='navButton' to='/users'>Users</Link>
        <Link className='navButton' to='/profile'>Profile Page</Link>
        <Link className='navButton' to='/products'>Products</Link>
        <Link className='navButton' to='/redux'>Redux</Link>


        
        <Link className='navButton logout' onClick={props.logout} to='/login' >Logout</Link>
      </div>
    </div>
    
  )
}

export default Nav