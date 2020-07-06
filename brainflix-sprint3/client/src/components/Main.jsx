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
        //https://project-2-api.herokuapp.com/videos?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c
        //http://localhost:8080/videos
        axios.get('http://localhost:8080/videos')
        .then(
            
            res=>{console.log("videos array should be here:"+res.data)
                this.setState({data: res.data})}
        ).catch(err=>console.log(err))         

        // console.log("cDmount" + {props})
            console.log("main video info: " , this.props)
            console.log("main video ID thisThing: " , this.props.match.params.id)
        if(thisThing !== this.props.match.params.id){
            if(this.props.match.params.id === undefined){
                this.props.match.params.id = thisThing
            }

            console.log(thisThing);
            
            globalVar = this.props.match.params.id
            console.log("globalVar: " , globalVar)
                //'http://localhost:8080/videos/1af0jruup5gu' || '/'
            axios.get(`http://localhost:8080/videos/${globalVar}`)
            .then(res=>{this.setState({mainVideo: res.data})})
        }
        
        //https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c
    }
    componentDidUpdate(prevProps){
        console.log("prevprops" + prevProps);
        if(this.props.match.params.id !== prevProps.match.params.id){
            if(this.props.match.params.id === undefined){
                this.props.match.params.id = "1af0jruup5gu"
            }console.log("DidUpdate ID: " + this.props.match.params.id)
            axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
            // axios.get( `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c`)
            .then(res=>{
            this.setState({mainVideo: res.data})
        })
            .catch(err=>console.log(err))}
            
        // if(this.props.match.path === '/' && prevProps !== this.props ){
        //     axios.get('http://localhost:8080/videos/1af0jruup5gu', console.log("axios.get call for '/'"))
        //     .then(res=>{this.setState({mainVideo: res.data})})
        //     .catch(err=>console.log(err))
        // }



        // if(onload.this.props.match.path.params. == `http://localhost:8080/` || this.props.path.params === `http://localhost:8080/videos/${this.props.match.params.id}`){
        //     axios.get(`http://localhost:8080/videos/${this.props.match.params.id}`)
        //     .then(
        //         res=>{this.setState({mainVideo: res.data})}
        //     )
        // }
    }
    // axios.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
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