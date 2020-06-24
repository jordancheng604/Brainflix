import React from 'react';
import axios from 'axios'
import Header from './components/header/Header.jsx';
import logo from '../src/logo.svg';
import mohan from '../src/assets/images/mohan.jpg';
import magGlass from '../src/assets/icons/PNG/Icon-search.png'
import upPlus from '../src/assets/icons/PNG/Icon-upload.png'
import MainPlayer from './components/main/main-video/main-player/MainPlayer.jsx';
import Description from './components/main/main-video/description/Description';
import Comments from './components/main/main-video/comments/Comments';
import SideVideo from './components/main/side-video/SideVideo';
import appStylz from './styles/appStylz.scss'

class App extends React.Component {
  state = {
    Data: []
  }
  componentDidMount(){
    console.log('It is working =)')
    axios
    .get('/Data.json')
    .then(res=>this.setState({Data: res.data}))
  }
  render() {
      return (
    <div> 
    <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/>
    <MainPlayer mainplay={this.state.Data}/>
    <Description explain={this.state.Data}/>
    <Comments commentsSection={this.state.Data}/>
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
