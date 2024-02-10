import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="sidebarImg" />
            <p className="description">TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</p>
        </div>
    </div>
  )
}
