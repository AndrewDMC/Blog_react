import React from 'react'
import './SinglePost.css'

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/20057853/pexels-photo-20057853/free-photo-of-matterhorn-covered-with-snow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                TestDelTops
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Andrea de Amicis</b></span>
                <span className="singlePostDate">12-02-2024</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, exercitationem! Adipisci magni recusandae voluptatum optio ad quaerat aut nihil accusantium doloremque at a, harum ab autem porro fuga illum? Recusandae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. A exercitationem nihil, sed ab blanditiis commodi repudiandae asperiores. Ipsa, veritatis enim harum, distinctio ad cum omnis sit, repellat placeat commodi itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed velit ut explicabo animi, dolore unde esse dolorem autem, ab mollitia voluptas incidunt aperiam. Voluptate optio laboriosam provident numquam omnis eaque.</p>
        </div>
    </div>
  )
}
