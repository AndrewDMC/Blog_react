import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""  />
            <p className="description">Test</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              <li className="sidebarListItem">LIFE</li>
              <li className="sidebarListItem">SZ</li>
              <li className="sidebarListItem">SCHOOL</li>
              <li className="sidebarListItem">OTHER</li>
            </ul>
        </div>
    </div>
  )
}
