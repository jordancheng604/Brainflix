import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import MainPlayer from '../main-player/MainPlayer';

//add link to each card. and then do componentdidupdate , checking params.

class SideVideo extends React.Component {  
                render() {
                    let vidList = this.props.sideVids
                    return(
                        <>
                        <h5 className="SideVideo__sectionTitle">NEXT VIDEO</h5>
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