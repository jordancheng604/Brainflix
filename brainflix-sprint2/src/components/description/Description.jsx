import React from 'react';
import eyeView from '../../assets/icons/PNG/Icon-views.png';
import heartLike from '../../assets/icons/PNG/Icon-likes.png';
import { BrowserRouter, Route, Switch, Link, withRouter } from "react-router-dom";
import moment from 'moment';

function Description({explain}) {
    
    return(
        <section className="describe">
            <div><h1 className='describe__title' key={explain.id}>
            {explain.title}</h1>
            <div className="describe__authToLksContain">
            <span className="describe__authDate">
            <span className="describe__author">By {explain.channel}</span>
            <span className="describe__date"> {moment(new Date(explain.timestamp)).fromNow()} </span>
            </span>
            <span className="describe__viewLike">
            <span>
            <img className="describe__eyeBall" src={eyeView} alt=''/>
            <span className="describe__views"> {explain.views} </span>
            </span>
            <span>
            <img className="describe__heartHeart" src={heartLike} alt=''/>
            <span className="describe__likes"> {explain.likes} </span>
            </span>
            </span>
            </div>
            <div className="describe__longContainr">
            <span className="describe__long">{explain.description}</span>
            </div>
            </div>
        </section>
    )
}
export default withRouter(Description);
