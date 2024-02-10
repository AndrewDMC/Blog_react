import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">

            <span className='headerTitleSm'>AndrewDMC</span>
            <span className='headerTitleLg'>BLOG</span>

        </div>
        <img src="https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="ImgHeader" />
    </div>
  )
}
