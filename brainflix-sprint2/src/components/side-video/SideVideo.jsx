import React from 'react';
import { Link, withRouter } from "react-router-dom";

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
        )})}
        </>)}}
        export default withRouter(SideVideo);