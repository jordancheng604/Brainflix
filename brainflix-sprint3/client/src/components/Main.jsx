import React from 'react';
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
import {withRouter} from "react-router-dom";

let thisThing = "1af0jruup5gu";
let globalVar = "";

class Main extends React.Component{
    state = {
        data: [],
        mainVideo: {}
    }        
    async componentDidMount(props){
        axios.get('http://localhost:8080/videos')
        .then(
            res=>{
                this.setState({data: res.data})}
        ).catch(err=>console.log(err))         
        if(thisThing !== this.props.match.params.id){
            if(this.props.match.params.id === undefined){
                this.props.match.params.id = thisThing
            }
            globalVar = this.props.match.params.id
            axios.get(`http://localhost:8080/videos/${globalVar}`)
            .then(res=>{this.setState({mainVideo: res.data})})
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.id !== prevProps.match.params.id){
            if(this.props.match.params.id === undefined){
                this.props.match.params.id = "1af0jruup5gu"}
            axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
            .then(res=>{
            this.setState({mainVideo: res.data})
        })
            .catch(err=>console.log(err))}
    }
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
            <section className="hopefullState">
            <SideVideo sideVids={this.state.data} mainplay={this.state.mainVideo}/>
            </section>
        </div>
    )
    }
}
export default withRouter(Main);