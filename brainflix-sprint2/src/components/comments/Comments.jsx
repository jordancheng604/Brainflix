import React, {Component} from 'react';
import mohan from '../../assets/images/mohan.jpg';
import moment from 'moment';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { func } from 'prop-types';
import PostComment from '../PostComment/PostComment';

function Comments({commentsSection}, PostComment){
    return(
        <div>
        <div className="comments">    
        <h5 className="comments__commStat">3 Comments</h5>
        <h5 className="comments__joinConvo" >JOIN THE CONVERSATION</h5>
        <form className="comments__addComm">
        <img className="comments__image" src={mohan} alt=""></img>                
        <textarea type="text" rows='4' placeholder="Write comment here" className="comments__input">
        </textarea>
        <Link path="">
        <button className="comments__button">COMMENT</button>
        </Link>
        </form>
        </div>
        {commentsSection.map(
        commentsSection =>
        <li className="comments__card" key={commentsSection.id}> 
        <img className="comments__image2" alt="" src=""/>
        <span className="comments__namDatContain">
        <span className="comments__usrName">{commentsSection.name}</span>
        <span className="comments__date">{moment(new Date(commentsSection.timestamp)).fromNow()}</span>
        </span>
        <div className="comments__commMent">{commentsSection.comment}</div>
            </li> 
        )}
        </div>
    )}
export default Comments;

