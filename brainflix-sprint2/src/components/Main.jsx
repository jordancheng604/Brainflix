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
        data: [],
        mainVideo: {}
    }        
    componentDidMount(){
        axios.get('https://project-2-api.herokuapp.com/videos?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
        // .get('https://project-1-api.herokuapp.com/comments?api_key=labKey')
        .then(res=>{console.log("This is the video array", res.data)
            this.setState({data: res.data})
            }
        )         
        axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
        .then(res=>{console.log("This is the Main video", res.data)
            this.setState({mainVideo: res.data})})
    }
    // componentDidMount2(){
    //     console.log("check check for comments")
    //     axios.get('https://project-1-api.herokuapp.com/comments?api_key=labKey')
    //     .then(res=>this.setState({commentsData: res.data}))     
    // }
    componentDidUpdate(SideVideo){
        //time for DOM change, if side video has an update(event) then mainPlayer will take update and its :id and render it.

        // if (this.props.SideVideo)
    }

    render(){
        console.log(this.state.mainVideo.comments)
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
           
            <SideVideo sideVids={this.state.data}/>
        </div>
    )
    }
}

export default Main;