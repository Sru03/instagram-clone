// rfce ~ shortcut command that creates the template for you 

import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";


function Post({username, caption, imageUrl}) {
  return (
    <div className = "post">

      <div className = "post_header"> 
      <Avatar
        className = "post_avatar"
        alt =  {username}
        src = "/static/images/avatar/1.jpg"

      /> 
      <h3> {username} </h3>
      </div>

        {/* header ->avatar + username*/}

        <img  
        className = "post_image" 
        src = {imageUrl}></img>
        {/* IMAGE */}
        
        <h4 className = "post_name">  <strong> {username} :  </strong> {caption} </h4>
        {/* username + caption */}

    </div>
  )
}

export default Post