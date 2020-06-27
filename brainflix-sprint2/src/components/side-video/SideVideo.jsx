import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import MainPlayer from '../main-player/MainPlayer';

//add link to each card. and then do componentdidupdate , checking params.

class SideVideo extends React.Component {
//console.log('hello from SideVideo component');
//console.log(MainPlayer);
// let noDoubles = "";
//You have to somehow link and route each card and use their exact :id so it knows what video to pull and render to the main video player.
//i need a  if statement in my filter
//console.log("sidevideo props is:"+props.mainplay)
//console.log("this is the mainplayer video:"+mainplay)
//if(mainplay.id == sideVids.id).filter(mainplay.id){}
    
    
                render() {
                    let vidList = this.props.sideVids
                    //console.log("side video ---"+vidList)
                
                    return(
                        <>
                   
                        {vidList.filter(
                            video=>video.id !== this.props.mainplay.id).map(video=>{return(
                                <Link to={`/videos/${video.id}`}>
                    <li className="SideVideo__card" key={video.id}>
                    
                        <img className="SideVideo__image" src={video.image} alt='thumbnail to indicate video'/>
                        <div>
                        <div className="SideVideo__title" >{video.title}</div>
                    <div className="SideVideo__author" >{video.channel}</div>
                    </div>
                    </li>
                    </Link>
                   
                           )  } )}</>)
            }}
        
        export default withRouter(SideVideo);

//<li className="SideVideo__card" key={video.id}>
// </li>