import React from 'react'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topicon fa fa-facebook-square" aria-hidden="true"></i>
            <i className="topicon fa fa-twitter" aria-hidden="true"></i>
            <i className="topicon fa fa-instagram" aria-hidden="true"></i>
            <i className="topicon fa fa-pinterest" aria-hidden="true"></i>
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
            <img className='topImg' src='https://images.pexels.com/photos/1858063/pexels-photo-1858063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile'/>
            <i  className="topsearchicon fa fa-search"></i>
        </div>
    </div>
  ) 
}

export default Topbar