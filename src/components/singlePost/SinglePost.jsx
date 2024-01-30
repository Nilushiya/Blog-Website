import React from 'react'
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="singlePostImg" />
      </div>
      <h1 className='singlePostTitle'>
        Lorem ipsum, dolor.
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>Author: <b>Safak</b></span>
        <span className="singlePostDate">1 hour ago</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quos, id unde 
            molestias nam, temporibus ut commodi velit aspernatur veniam qui. Nam, quos? Vel laborum quia reiciendis explicabo cumque ipsa!</p>
      </div>
    </div>
  )
}

export default SinglePost