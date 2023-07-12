import React, { useEffect, useState } from 'react';
import './App.css';
import Post from './Post.jsx';
import { db } from './firebase';

function App() {

   const [posts, setPosts] = useState([ ]);

  //  run a piece of code
    useEffect(()=>{
      db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({id: doc.id,
           post: doc.data()})));
      })
    }, []);

  return (

  

    <div className="App w-100 flex flex-column item-center">
      <header className="App-header">
        <div className="logo bb"><h1 id="logo">BeFriends</h1></div>
      </header>
      <div className="post">

        {
          posts.map(({post, id}) => (
            <Post key={id} imgURL={post.imgURL} userName={post.userName} caption={post.caption} />
          ))
        }

      </div>
    </div>
  );
}

export default App;
