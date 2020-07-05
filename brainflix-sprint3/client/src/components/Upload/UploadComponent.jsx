import React, {Component} from 'react'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import { Link } from "react-router-dom";
import Axios from 'axios';
//import { render } from '@testing-library/react';

class UploadComponent extends Component {

state= {
    title: "",
    description: "",
    //image: uploadImage
    // {uploadImage}
};

formSubmit = e =>{
    e.preventDefault();

    const newNewVideo ={
    title: "",
    description: "",
    image: "https://picsum.photos/200"
    }
    console.log(newNewVideo);
    // const newNewVideo = {
    //     title: this.state.titleName,
    //     description: this.state.clientVideoDescription
    // }

    // const newNewVideo = {}
    //     newNewVideo.title = formSubmit.title,
    //     newNewVideo.description = formSubmit.description,
    //     newNewVideo.image = {uploadImage}
    
    // Axios.post('http://localhost:8080/upload', newNewVideo)
    // .then(res=>{console.log("axios post"+res); 
    // console.log("axios post with data" + res.data)})

    // console.log("New Video Upload:" + newNewVideo);
}

submitting=(e)=>{
    // console.log("title "
    // + e.target.value)
    // console.log("2nd one " + e.target.value)
    
    this.setState({titleName: e.target.value});
    this.setState({clientVideoDescription: e.target.value});
    console.log({titleName: e.target.value});
    console.log({clientVideoDescription: e.target.value});

    const newSubmit= this.state


    // Axios.post('http://localhost:8080/upload', {
    // "title": e.target.value,
    // "description": e.clientVideoDescription.value

    // })
    // .then(res=>{console.log("axios post"+res); 
    // console.log("axios post with data" + res.data)})



    //console.log("New Video Upload:" + newNewVideo);
    //console.log("Submitting:" + this.submitting)
    //console.log(this.submitting)
}

    //const newVideo = (e)=>{ Axios.post('http://localhost:8080/upload',)}
    // {title: e.target.input.value,
    // description: e.target.textarea.value,})
    // console.log(newVideo)
    //}
render(){
    return (
        <form onSubmit={this.formSubmit}>
            <h1 className="UploadComponent__sectionTitle">Upload Video</h1>
            <h5 className="UploadComponent__videoAreaTitle">VIDEO THUMBNAIL</h5>
            <img className="UploadComponent__yourVideoImage" src={uploadImage} alt=""/>
            <div className="UploadComponent__yourDesktopContainer">
            <h5 className="UploadComponent__yourVideoTitle">TITLE 
            YOUR VIDEO</h5>
            <input name="titleName" onChange={this.submitting} className="UploadComponent__yourTitleInput" type="text" placeholder="Add a title to your video"/>
            <h5 className="UploadComponent__yourVideoDescriptionTitle">ADD A VIDEO DESCRIPTION</h5>
            <textarea name="clientVideoDescription" onChange={this.submitting} className="UploadComponent__yourVideoDetailsInput" type="text" placeholder="Add a description of your video"></textarea>
            </div>
            <div className="UploadComponent__buttonsContainer">

            {/* //<button onSubmit={newVideo} className="UploadComponent__publishButton">PUBLISH</button> */}
            <button className="UploadComponent__publishButton">PUBLISH</button>
                {/* event handler for upload submission. upload the form. */}


            <Link to="/">
            <button className="UploadComponent__cancelButton">CANCEL</button></Link>
            </div>
        </form>
    )
}
}
export default UploadComponent;