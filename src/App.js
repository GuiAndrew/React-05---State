import React from 'react';
import './App.css';
import Contact from './components/Contact';

const name1 = "Anne Fran";
const name2 = "John Campos";
const name3 = "Bruce Ally";

const avatarImg1 = "https://randomuser.me/api/portraits/women/66.jpg";
const avatarImg2 = "https://randomuser.me/api/portraits/men/66.jpg";
const avatarImg3 = "https://randomuser.me/api/portraits/men/13.jpg";

function App() {
  return (
    <div className="App">      
      <Contact
        avatar = { avatarImg1 } 
        name =  { name1 }
        isOnline = { true } 
        isOnlineStr = { true }
      />
      <Contact
        avatar = { avatarImg2 } 
        name =  { name2 }
        isOnline = { false } 
        isOnlineStr = { false }
      />
      <Contact
        avatar = { avatarImg3 } 
        name =  { name3 }
        isOnline = { true } 
        isOnlineStr = { true }
      />
    </div>
  );
}

export default App;
