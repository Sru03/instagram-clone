//import logo from './logo.svg';
import './App.css';
import Post from './Post';
import React, {useState} from 'react';

function App() {
  const [posts, setPosts] = useState([
    {username: "Joe Alwyn",
     caption: "Gorgeous", 
     imageUrl: "https://i.pinimg.com/originals/4a/16/09/4a1609ec02733fd2aff3fc00504ede72.jpg" 

     },

     {username: "Joe Alwyn",
     caption: "Gorgeous", 
     imageUrl: "https://i.pinimg.com/originals/4a/16/09/4a1609ec02733fd2aff3fc00504ede72.jpg" 
     
     }
    
  ]);


  return (
    <div className="app">
   
      <header className="app__header">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          width ="130"
          height = "50"
        alt=" "
        />
         
      </header>
     
      <h1> heading </h1>

      {
        posts.map(post => (
          <Post username = {post.username} caption = {post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
       {/* posts 
       posts */}

    </div>

  
  );
}

export default App;
