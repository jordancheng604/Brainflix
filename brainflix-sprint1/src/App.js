import React from 'react';
// import appStyles from './styles/app';
// import './App.css';
import Header from './components/header/Header.jsx';
import logo from '../src/logo.svg';
import mohan from '../src/assets/images/mohan-muruge.jpg';
import MainPlayer from './components/main/main-video/main-player/MainPlayer.jsx';
import Description from './components/main/main-video/description/Description';


function App() {
  return (
    <> 
    <Header logo={logo} mohan={mohan}/>
    <MainPlayer/>
    <Description/>
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
    </>
  );
}

export default App;
