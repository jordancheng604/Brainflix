import React, {Component} from 'react'
import uploadImage from '../../assets/images/Upload-video-preview.jpg';
import { Link, Redirect, withRouter } from "react-router-dom";
import Axios from 'axios';

class UploadComponent extends Component {
constructor(){
super()
this.state= {
    title: "",
    description: "",
    image: "https://picsum.photos/200"
};
this.submitting=this.submitting.bind(this);

this.formSubmit=e=>{
    e.preventDefault();
    e.target.reset();
    Axios.post('http://localhost:8080/videos', this.state)
}}

submitting=(e)=>{
    this.setState({[e.target.name] : e.target.value});
}

render(){
    return (
       <form onSubmit={this.formSubmit}>
            <h1 className="UploadComponent__sectionTitle">Upload Video</h1>
            <h5 className="UploadComponent__videoAreaTitle">VIDEO THUMBNAIL</h5>
            <img className="UploadComponent__yourVideoImage" src={uploadImage} alt=""/>
            <div className="UploadComponent__yourDesktopContainer">
            <h5 className="UploadComponent__yourVideoTitle">TITLE 
            YOUR VIDEO</h5>
            <input name="title" onChange={this.submitting} className="UploadComponent__yourTitleInput" type="text" placeholder="Add a title to your video"/>
            <h5 className="UploadComponent__yourVideoDescriptionTitle">ADD A VIDEO DESCRIPTION</h5>
            <textarea name="description" onChange={this.submitting} className="UploadComponent__yourVideoDetailsInput" type="text" placeholder="Add a description of your video"></textarea>
            </div>
            <div className="UploadComponent__buttonsContainer">
            <button className="UploadComponent__publishButton">PUBLISH</button>
            <Link to="/">
            <button className="UploadComponent__cancelButton">CANCEL</button></Link>
            </div>
        </form>
    )}}
export default UploadComponent;