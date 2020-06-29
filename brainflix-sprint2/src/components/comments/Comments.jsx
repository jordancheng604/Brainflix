import React from 'react';
import mohan from '../../assets/images/mohan.jpg';
import moment from 'moment';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Comments({commentsSection}){
    // async componentDidUpdate(){
    //     axios.post('https://project-2-api.herokuapp.com/videos/${video.id}/comments?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c')
    // }
    // to={axios.post('https://project-2-api.herokuapp.com/videos/${video.id}/comments?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c'
    //         )}
    return(
        <div>
            <div className="comments">    
            <h5 className="comments__commStat">3 Comments</h5>
           <h5 className="comments__joinConvo" >JOIN THE CONVERSATION</h5>
           <form className="comments__addComm">
            <img className="comments__image" src={mohan} alt=""></img>                
            <textarea type="text" rows='4' placeholder="Write comment here" className="comments__input">
            </textarea>
            {/* <Link  > */}
            
            <button className="comments__button">COMMENT</button>
            {/* </Link> */}
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
    )
}

