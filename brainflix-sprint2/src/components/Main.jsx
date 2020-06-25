import React from 'react';
import axios from 'axios';
import Header from './header/Header'
import logo from '../logo.svg'
import mohan from '../assets/images/mohan.jpg';
import magGlass from '../assets/icons/SVG/Icon-search.svg'
import upPlus from '../assets/icons/SVG/Icon-upload.svg'
import MainPlayer from './main-player/MainPlayer.jsx';
import Description from './description/Description.jsx';
import Comments from './comments/Comments.jsx';
import SideVideo from './side-video/SideVideo.jsx';
// import appStylz from '../styles/appStylz.scss'
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Main extends React.Component{
    state = {
        data: []
    }        
    componentDidMount(){
        console.log("check check")
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
        .then(res=>this.setState({data: res.data}))         
    }
    render(){
    return(
        <div>
            <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/>
            <MainPlayer mainplay={this.state.data}/>
            <Description explain={this.state.data}/>
            <Comments commentsSection={this.state.data}/>
            <SideVideo sideVids={this.state.data}/>
        </div>
    )
    }
}

export default Main;