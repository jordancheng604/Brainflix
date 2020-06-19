import React from 'react';
// import appStyles from './styles/app';
// import './App.css';
import Header from './components/header/Header.jsx';
import logo from '../src/logo.svg';
import mohan from '../src/assets/images/mohan.jpg';
import MainPlayer from './components/main/main-video/main-player/MainPlayer.jsx';
import Description from './components/main/main-video/description/Description';
import Comments from './components/main/main-video/comments/Comments';
import SideVideo from './components/main/side-video/SideVideo';
import Data from './Data.json';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';

// function Data (){
//   fetch('./data.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // Work with JSON data here
//     console.log(data)
//   })
//   .catch(err => {
//     // Do something for an error here
//   })
// }


// function GetStuff (){
//   axios.get(http://localhost:3000/Data.json)
//   .then()
//   .catch(error => console.log(error));

// }


function App() {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // Data.map()
  //   }
  // }

  
      return (
    <div> 
    {/* <Data/> */}
    <Header logo={logo} mohan={mohan}/>
    <MainPlayer/>
    <Description/>
    <Comments/>
    <SideVideo/>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
    </div>
  );
      
}

export default App;
