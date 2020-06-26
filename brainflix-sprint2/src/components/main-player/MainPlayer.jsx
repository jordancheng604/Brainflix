import React from 'react';
//import { withRouter } from 'react-router-dom';
import { Component } from 'react';
import { BrowserRouter, Route, withRouter, Switch, Link } from "react-router-dom";
import SideVideo from '../side-video/SideVideo';

function MainPlayer ({mainplay}) {
//this.props.match.params.id

//componentDidUpdate goes here?

//poster={mainplay.image}

    return(
        <section className='mainPlayer'>
            <video controls src="" className='mainPlayer__video' alt='Main Video' key={mainplay.id} poster={mainplay.image}>
            <source src="" type=""></source>
            </video>
            <div className='mainPlayer__controls'>
            <span className='mainPlayer__rightSide'> 
            <span className='mainPlayer__fullScreen'></span>
            <span className='mainPlayer__volume'></span>
            </span>
            </div>
        </section>
    )
}
export default withRouter(MainPlayer);

// {mainplay.slice(8).map(mainplayervid => <video controls src="" poster={mainplayervid.image}className='mainPlayer__video' alt='Main Video' key={mainplayervid.id}>
// <source src="" type=""></source>
// </video>).slice(0,1)}
// <div className='mainPlayer__controls'>
// <span className='mainPlayer__rightSide'> 
// <span className='mainPlayer__fullScreen'></span>
// <span className='mainPlayer__volume'></span>
// </span>
// </div>