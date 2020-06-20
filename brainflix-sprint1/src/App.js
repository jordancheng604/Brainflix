import React from 'react';
import axios from 'axios'

// import appStyles from './styles/app';
// import './App.css';
import Header from './components/header/Header.jsx';
import logo from '../src/logo.svg';
import mohan from '../src/assets/images/mohan.jpg';
import MainPlayer from './components/main/main-video/main-player/MainPlayer.jsx';
import Description from './components/main/main-video/description/Description';
import Comments from './components/main/main-video/comments/Comments';
import SideVideo from './components/main/side-video/SideVideo';
// import Data from './Data.json';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

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

class App extends React.Component {
  state = {
    Data: []
  }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     // Data.map()
  //   }
  // }
  componentDidMount(){
    console.log("It's working... =)")
    axios
    .get('/Data.json')
    .then(res=>this.setState({Data: res.data}))
  }

  render() {
      return (
    <div> 
    {/* <Data/> */}
    <Header logo={logo} mohan={mohan}/>
    <MainPlayer/>
    <Description/>
    <Comments/>
    <SideVideo sideVids={this.state.Data}/>
    <div className="App">
      <header className="App-header">

      </header>
    </div>
    </div>
  );
}    
}

export default App;
