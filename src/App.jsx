import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
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
      <Post />
       {/* posts 
       posts */}

    </div>

  
  );
}

export default App;
