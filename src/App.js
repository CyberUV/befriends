import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post.jsx';


function App() {

   const [posts, setPosts] = useState([
    {
      userName: "@buddy_rudraksh",
      imgURL: "https://th.bing.com/th/id/OIP.trffGgWvgymBwZMdN7KhQgHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.2&pid=1.7",
      caption: "hi I am Just testing my befrineds "
    },
    {
      userName: "@buddy_rudraksh",
      imgURL: "./logo192.png",
      caption: "hi I am Just testing my befrineds "
    }
   ]);

  //  run a piece of code


  return (
    <div className="App w-100 flex flex-column item-center">
      <header className="App-header">
        <div className="logo bb"><h1 id="logo">BeFriends</h1></div>
      </header>
      <div className="post">

        {
          posts.map(post => (
            <Post imgURL={post.imgURL} userName={post.userName} caption={post.caption} />
          ))
        }

      </div>
    </div>
  );
}

export default App;
