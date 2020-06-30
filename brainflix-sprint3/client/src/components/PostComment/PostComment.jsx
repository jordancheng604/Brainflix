//This is for future Axios Posts; to post comments to the page.
import React from 'react';
import axios from 'axios';
import video from '../side-video/SideVideo';
import Comments from '../comments/Comments';

export default class PostComment extends React.Component {
    State = {
        comment:'',
        name: 'Mohan',
    }

    handleChange=event=>{
        this.setState({addComment: event.target.value});
    }

    handleSubmit=event=>{
        event.preventDefault();

        const addComment = {
            comment: this.state.comment
        };

        axios.post(`https://project-2-api.herokuapp.com/videos/${video.id}/comments?api_key=d7b6e3df-722d-45bd-af02-c582050fee5c`, {addComment})
        .then(res=>{
            console.log(res)
            console.log(res.data);
        })


    }

    render(){
    return (
        <div>
            <h5>You Posted A Comment.</h5>
            
        </div>
    )}
}
