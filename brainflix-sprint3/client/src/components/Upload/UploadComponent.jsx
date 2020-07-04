import React, {Component} from 'react'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { render } from '@testing-library/react';

export default class UploadComponent extends Component {
state= {
    title: "",
    description: ""
}



    // const newVideo = (e)=>{ Axios.post('http://localhost:8080/upload',
    // {title: e.target.input.value,
    // description: e.target.textarea.value,})
    // console.log(newVideo)
    //}
render(){
    return (
        <form>
            <h1 className="UploadComponent__sectionTitle">Upload Video</h1>
            <h5 className="UploadComponent__videoAreaTitle">VIDEO THUMBNAIL</h5>
            <img className="UploadComponent__yourVideoImage" src={uploadImage} alt=""/>
            <div className="UploadComponent__yourDesktopContainer">
            <h5 className="UploadComponent__yourVideoTitle">TITLE 
            YOUR VIDEO</h5>
            <input className="UploadComponent__yourTitleInput" type="text" placeholder="Add a title to your video"/>
            <h5 className="UploadComponent__yourVideoDescriptionTitle">ADD A VIDEO DESCRIPTION</h5>
            <textarea className="UploadComponent__yourVideoDetailsInput" type="text" placeholder="Add a description of your video"></textarea>
            </div>
            <div className="UploadComponent__buttonsContainer">

            {/* //<button onSubmit={newVideo} className="UploadComponent__publishButton">PUBLISH</button> */}
            <button onSubmit={""} className="UploadComponent__publishButton">PUBLISH</button>
                {/* event handler for upload submission. upload the form. */}


            <Link to="/">
            <button className="UploadComponent__cancelButton">CANCEL</button></Link>
            </div>
        </form>
    )
}
}
