import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>AndrewDMC</span>
            <span className='headerTitleLg'>BLOG</span>

        </div>
        <img src="https://images.pexels.com/photos/20064362/pexels-photo-20064362/free-photo-of-a-train-moving-through-a-subway-station-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="ImgHeader" />
    </div>
  )
}
