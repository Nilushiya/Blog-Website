import React from 'react'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-pinterest" aria-hidden="true"></i>
            </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>Logout</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg' src='' alt='profile'/>
            <i  className="fa fa-search"></i>
        </div>
    </div>
  ) 
}

export default Topbar