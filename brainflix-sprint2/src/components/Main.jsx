import React, { Component } from 'react';
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
    componentDidUpdate(prevProps){
        console.log()
        //time for DOM change, if side video has an update(event) then mainPlayer will take update and its :id and render it.
        //change prop, 
        //match.params
        //slash video slash id
        //
        // if (this.props.SideVideo)
        //this takes in previous state and previous props
        //old state not equal to current state(param)
        //use axios to get new param(id) object and setstate of the mainvideo
        //axios call to grab info from main.
        //
        //new video is about a 1 liner.
        //axios get the new data.
        //this.props.match.params.id - will get updated. 
        //match.params relates to users' location.
        //axios.get(url {`/videos/${vidList.id}`)
        //user clicks video on mainPlayer; it won't axios call.
        //this.props.match.params.id = prevprops.match.params.id
        //(e)preventDefault.
        //because only accessing the id.
        // URL = ({`/videos/${vidList.id}`})
        //        axios.get(/videos/`${vidList.id}`)
        //axios.get('props.match.params.id'

        // <Route exact path="/videos/:id" component={SideVideo}/>
        // if(this.props.params.id !== props.params.id){
        // axios.get(`/videos/${vidList.id}`)
        // .then(res=>{console.log("This is the *UPDATED* Main video", res.data)
        // this.setState({newMainVideo: res.data})})
        // }

        //<Route exact path="/videos/:id" component={SideVideo}/>
        //this.props.match.params.id

        //dynamic route
        //route to component. which is the video id.

        //console.log(this.props.match.params.id)
            //console.log(prevProps.match.params.id)

            // console.log("This is componentDidUpdate props:"+ {props});
            // console.log("this is prevProps:"+{prevProps})

        // if(props.params.id !== prevProps.params.id){
        //      axios.get(<Route path="/videos/:id" component={SideVideo}/>)
        //     .then.setState(props.match.params.id)}

        // if(this.props.match.params){console.log("componentUpdate and params are..." + this.props.match.params[0])}

//         let hopefulNewState = ""
// if (this.state !==undefined){
//     hopefulNewState = () => {  
//      if(this.props.match.params !== prevProps.match.params){
//             axios.get(<Route path="/videos/:id" component={SideVideo}/>)
//             .then.setState(()=>{SideVideo({props})})
//             .catch(err=>console.log(err))
//         }

//(this.props !==undefined)
console.log(this.props)
let hopefulNewState = ""
if(this.props.match.params.id !== prevProps.match.params.id){
            axios.get( `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c`)
            .then(res=>{
            this.setState({mainVideo: res.data})
        })
            .catch(err=>console.log(err))
    }
    

        // if(this.props.match.params !== prevProps.match.params){
        //     axios.get(<Route path="/videos/:id" component={SideVideo}/>)
        //     .then.setState(()=>{SideVideo()})
        //     .catch(err=>console.log(err))
        // }
    }

    render(){
        //console.log("this is the state main video:" + this.state.mainVideo)
         //console.log("this is the props main video:" 
        // + this.props.mainVideo)
        // console.log("this is another console log" + this.props.match.params)
            //console.log(this.state.id)
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