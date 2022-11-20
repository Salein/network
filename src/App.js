import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
            <img src="https://i1.7fon.org/thumb/g577761.jpg" alt="" />
        </header>
      <nav className='nav'>
        <div>
          <a href='#'>Profile</a>
        </div>
        <div>
        <a href='#'>Messages</a>
        </div>
        <div>
        <a href='#'>News</a>
        </div>
        <div>
        <a href='#'>Musik</a>
        </div>
        <div>
        <a href='#'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div>
        <div>
          ava
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            Posts 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;