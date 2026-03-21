import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>Nav
        <ul>
            <li>< Link to={"/"}> Home</ Link></li>
            <li>< Link to={"/"}> </ Link></li>
            <li>< Link to={"/"}> </ Link></li>
            <li>< Link to={"/"}> </ Link></li>
            <li>< Link to={"/"}> </ Link></li>
        </ul>
    </div>
  )
}

export default Nav