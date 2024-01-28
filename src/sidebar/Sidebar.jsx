import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img 
                src='https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='aboutPic'
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nostrum dolorem perferendis ipsum obcaecati facilis minus placeat laborum at ducimus cumque, a magni consequatur! Veniam deserunt dicta maxime aut placeat.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Fllow us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa fa-facebook-square" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-twitter" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-instagram" aria-hidden="true"></i>
            <i className="sidebarIcon fa fa-pinterest" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar