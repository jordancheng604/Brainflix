import React, { Component } from 'react';
import axios from 'axios';
import Header from './header/Header';
import logo from '../logo.svg';
import mohan from '../assets/images/mohan.jpg';
import magGlass from '../assets/icons/SVG/Icon-search.svg';
import upPlus from '../assets/icons/SVG/Icon-upload.svg';
import MainPlayer from './main-player/MainPlayer.jsx';
import Description from './description/Description.jsx';
import Comments from './comments/Comments.jsx';
import SideVideo from './side-video/SideVideo.jsx';
import sideVids from './side-video/SideVideo';
// import appStylz from '../styles/appStylz.scss'
import { BrowserRouter, Route, withRouter, Switch, Link } from "react-router-dom";

class Main extends React.Component{
    state = {
        data: [],
        mainVideo: {}
    }        
    async componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
        .then(res=>{console.log("This is the video array", res.data)
            this.setState({data: res.data})
            }
        )         
        axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
        .then(res=>{console.log("This is the Main video", res.data)
            this.setState({mainVideo: res.data})})
    }
   
    componentDidUpdate(prevProps){
        console.log()
        console.log(this.props)
        if(this.props.match.params.id !== prevProps.match.params.id){
            axios.get( `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c`)
            .then(res=>{
            this.setState({mainVideo: res.data})
        })
            .catch(err=>console.log(err))
    }}

    render(){
        let videoComment = "";
        if (this.state.mainVideo.comments!==undefined){
        videoComment =  <Comments commentsSection={this.state.mainVideo.comments}/>
        }
    return(
        <div>
            <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/>
            <MainPlayer mainplay={this.state.mainVideo}/>
            <Description explain={this.state.mainVideo}/>
            {videoComment}
           
            <SideVideo sideVids={this.state.data} mainplay={this.state.mainVideo}/>
        </div>
    )
    }
}

export default withRouter(Main);