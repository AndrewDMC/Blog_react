import React from 'react'
import './Single.css'
import Sidebar from '../../../sidebar/Sidebar'
import SinglePost from '../../../SinglePost/SinglePost'

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
