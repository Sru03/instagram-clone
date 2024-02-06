//import logo from './logo.svg';
import './App.css';
import Post from './Post';
import React, {useState, useEffect} from 'react';
import {addPosts, getAllPosts} from './firebaseService';
import { GoHomeFill } from "react-icons/go";
import { FiPlusSquare } from "react-icons/fi";
import { PiHeartStraightLight } from "react-icons/pi";
import { ImCompass2 } from "react-icons/im";
import { TextField } from '@mui/material';



function App() {

  const [newItem, setNewItem] = useState({name: ' ', description: ''});

  const [posts, setPosts] = useState([

    {username: "Joe Alwyn",
     caption: "Gorgeous",
     imageUrl: "https://i.pinimg.com/originals/4a/16/09/4a1609ec02733fd2aff3fc00504ede72.jpg" 
    },

    {
      username: "Gigi",
      caption:"Carefull now",
      imageUrl:"https://media.glamour.com/photos/5af0f66b4deff0613c3436ae/master/w_1920%2Cc_limit/gigi2.jpg"
    }
  ]);


    // useEffect(()=>{

    //   const fetchData = async() => {
    //     const data = await getAllPosts();
    //     setPosts(data);
    //     console.log("hello");
    //   }
    //     fetchData()

    // }, []);


  return (
    <div className="app">
   
      <header className="app__header">

        <div className = "header">

        <div className = "Instagram label">
        <img
          className="app__headerImage"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
          width ="130"
          height = "50"
        alt=" "
        />
        </div>
        

        <div className = "Search"> 
        
        <TextField 
        id = "outlined-basic"
        variant="outlined"
        fullWidth
        label="Search" 
        />
        </div>

        <div>
        <GoHomeFill />
        </div>

        <div>
        <FiPlusSquare />
        </div>

        <div>
        <ImCompass2 />
        </div>

        <div>
        <PiHeartStraightLight />
        </div>


        </div>




         
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
