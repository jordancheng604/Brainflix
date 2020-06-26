import React from 'react';
// import axios from 'axios'
// import Header from './components/header/Header.jsx';
// import logo from '../src/logo.svg';
// import mohan from '../src/assets/images/mohan.jpg';
// import magGlass from '../src/assets/icons/PNG/Icon-search.png'
// import upPlus from '../src/assets/icons/PNG/Icon-upload.png'
// import Main from './components/Main'

// import MainPlayer from './components/main/main-video/main-player/MainPlayer.jsx';
// import Description from './components/main/main-video/description/Description';
// import Comments from './components/main/main-video/comments/Comments';
// import SideVideo from './components/main/side-video/SideVideo';
// import appStylz from './styles/appStylz.scss'
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './components/Main';
import Upload from './pages/Upload';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MainPlayer from './components/main-player/MainPlayer';

class App extends React.Component {
  // state = {
  //   Data: []
  // }
  // componentDidMount(){
  //   console.log('It is working =)')
  //   axios
  //   .get('/Data.json')
  //   .then(res=>this.setState({Data: res.data}))
  // }
  render() {
      return (
    <div> 
      <BrowserRouter>
     


      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Upload' component={Upload}/>
      <Route exact path='/:id' component={MainPlayer}></Route>
      
      </Switch>
      </BrowserRouter>
    
        {/* <Main/>
        <Upload/> */}
    {/* <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/> */}
    
    {/* <Main/> */}
    {/* <MainPlayer mainplay={this.state.Data}/>
    <Description explain={this.state.Data}/>
    <Comments commentsSection={this.state.Data}/>
    <SideVideo sideVids={this.state.Data}/> */}
    {/* <div className="App">
      <header className="App-header">
      </header>
    </div> */}
    </div>
  );
}    
}
export default App;
